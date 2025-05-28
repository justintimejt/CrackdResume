import { NextResponse } from 'next/server';

interface LatexOnlineRequest {
    code: string;
    format: 'pdf';
}

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

        const latexOnlineRequest: LatexOnlineRequest = {
            code: latex,
            format: 'pdf'
        };

        //call latex.online api
        const response = await fetch('https://latex.online/compile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(latexOnlineRequest)
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
            } catch (e) {
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

        const pdfBuffer = await response.arrayBuffer();

        if (!pdfBuffer || pdfBuffer.byteLength === 0) {
            return NextResponse.json({
              error: "Received empty PDF from LaTeX.Online"
            }, { status: 500 });
          }
      
        console.log(`PDF successfully compiled, size: ${pdfBuffer.byteLength} bytes`);

        // Return pdf as response
        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="document.pdf"',
            'Content-Length': pdfBuffer.byteLength.toString(),
            
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            },
        });



    }
}