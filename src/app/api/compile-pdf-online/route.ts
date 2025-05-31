import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase-admin';
import { v4 as uuidv4 } from 'uuid';



export async function POST(req: Request) {
    //debug
    console.log('PDF compilation request received (LaTeX.Online)');

    
    try {
        const { latex } = await req.json();

        if (!latex || typeof latex !== 'string') {
            return NextResponse.json(
              { error: "Invalid LaTeX code provided" }, 
              { status: 400 }
            );
        }

        //debug
        console.log('Sending LaTeX to LaTeX.Online API...');


        const encodedLatex = encodeURIComponent(latex);
        const apiUrl = `https://latexonline.cc/compile?text=${encodedLatex}`;

        //call latex.online api
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; LaTeX-Compiler/1.0)',
            },
            signal: AbortSignal.timeout(30000)
        });

        //debug
        console.log('LaTeX.Online response status:', response.status);

        if (!response.ok) {
            //error handling
            let errorDetails = '';
            try {
              const errorText = await response.text();
              errorDetails = errorText;
              console.error('LaTeX.Online error response:', errorText);
            } catch {
              console.error('Could not parse error response');
            }
        

            return NextResponse.json({
                error: "Latex compilation failed",
                details: errorDetails || `HTTP ${response.status}`,
                status: response.status
            }, { 
                status: response.status >= 500 ? 500 : 400 
            });
        }
        
        //pdf buffer -> blob
        const pdfArrayBuffer = await response.arrayBuffer();
        const pdfBuffer = Buffer.from(pdfArrayBuffer);

        //latex file blob
        const latexBuffer = new TextEncoder().encode(latex);

        //upload pdf and latex to supabase storage
        const id = uuidv4();
        const folder = `resumes/${id}`;
        const pdfPath = `${folder}/resume.pdf`
        const texPath = `${folder}/resume.tex`

        const [{ error: pdfError }, { error: texError }] = await Promise.all([
          supabase.storage.from('resumes').upload(pdfPath, pdfBuffer, {
            contentType: 'application/pdf',
            upsert: true,
          }),
          supabase.storage.from('resumes').upload(texPath, latexBuffer, {
            contentType: 'text/plain',
            upsert: true,
          }),
        ]);

        if (pdfError || texError) {
          console.error('Supabase Upload Error:', pdfError || texError);
          return NextResponse.json({ error: "Upload to Supabase failed" }, { status: 500 });
        }

        //gen signed urls (valid for 60 mins)
        const [{ data: pdfSignedUrl, error: pdfSignedUrlError }, { data: texSignedUrl, error: texSignedUrlError }] = await Promise.all([
          supabase.storage.from('resumes').createSignedUrl(pdfPath, 60 * 60),
          supabase.storage.from('resumes').createSignedUrl(texPath, 60 * 60),
        ]);
        
        if (pdfSignedUrlError || texSignedUrlError) {
          console.error('Signed URL Error:', pdfSignedUrlError || texSignedUrlError);
          return NextResponse.json({ error: "Failed to generate signed URLs" }, { status: 500 });
        }

        //get public urls for uploaded files
        const { data: pdfUrlData } = supabase.storage.from('resumes').getPublicUrl(pdfPath);
        const { data: texUrlData } = supabase.storage.from('resumes').getPublicUrl(texPath);

        
        //store metadata in Supabase database (table: resumes) public
        // const { error: insertError } = await supabase
        // .from('resumes')
        // .insert([
        //   {
        //     id,
        //     created_at: new Date().toISOString(),
        //     pdf_url: pdfUrlData.publicUrl,
        //     tex_url: texUrlData.publicUrl,
        //   },
        // ]);

        // if (insertError) {
        //   console.error('Database insert error:', insertError);
        //   return NextResponse.json({ error: "Failed to store metadata" }, { status: 500 });
        // }

        //signed urls (private metadata)
        // const { error: insertError } = await supabase
        //   .from('resumes')
        //   .insert([
        //     {
        //       id,
        //       created_at: new Date().toISOString(),
        //       pdf_url: pdfSignedUrl?.signedUrl,
        //       tex_url: texSignedUrl?.signedUrl,
        //     },
        //   ]);



        // return URLs and id
        return NextResponse.json({
          id,
          pdfUrl: pdfUrlData.publicUrl,
          texUrl: texUrlData.publicUrl,
        }, { status: 200 });

      } catch (error) {
        console.error("PDF Compilation Error:", error);
        return NextResponse.json({
          error: "Failed to compile or store PDF",
          details: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
}