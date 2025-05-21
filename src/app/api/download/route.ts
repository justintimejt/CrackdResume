import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: "Missing PDF id." }, { status: 400})
    }

    const pdfPath = path.join('/tmp', `${id}.pdf`);

    try {
        const pdfBuffer = await readFile(pdfPath);
        const pdfUint8Array = new Uint8Array(pdfBuffer);

        return new NextResponse(pdfUint8Array, {
            status: 200, //request succeeded
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="resume-${id}.pdf`,
            },
        });
    } catch (error) {
        console.error('Error reading PDF file:', error);
        return NextResponse.json({ error: 'File not found'}, { status: 404 });
    }
}

