import { NextResponse } from 'next/server';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { getFirestore } from 'firebase-admin/firestore';
import { v4 as uuidv4 } from 'uuid';

if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
  }
  
  const bucket = getStorage().bucket();
  const db = getFirestore();

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

        //upload pdf and latex to firebase storage
        const id = uuidv4();
        const pdfFile = bucket.file(`resumes/${id}.pdf`);
        const texFile = bucket.file(`resumes/${id}.tex`);

        await Promise.all([
            pdfFile.save(Buffer.from(pdfBuffer), {
              contentType: 'application/pdf',
              metadata: { firebaseStorageDownloadTokens: id },
            }),
            texFile.save(Buffer.from(latex), {
              contentType: 'text/plain',
              metadata: { firebaseStorageDownloadTokens: id },
            }),
          ]);
        
        const bucketName = process.env.FIREBASE_STORAGE_BUCKET!;
        const encodedPath = encodeURIComponent(`resumes/${id}.pdf`);
        const encodedTexPath = encodeURIComponent(`resumes/${id}.tex`);

        const pdfUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodedPath}?alt=media&token=${id}`;
        const texUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodedTexPath}?alt=media&token=${id}`;

        //store metadata in firestore
        await db.collection('resumes').doc(id).set({
            createdAt: new Date(),
            pdfUrl,
            texUrl,
        });
      
        return NextResponse.json({ pdfUrl, texUrl, id }, { status: 200 });


    } catch (error) {
      console.error("PDF Compilation Error:", error);
      return NextResponse.json({
        error: "Failed to compile or store PDF",
        details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}