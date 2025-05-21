import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
    }

    const pdfPath = path.join('/tmp', `${id}.pdf`);

    try {
        const pdfBuffer = await fs.readFile(pdfPath);
        const pdfUint8Array = new Uint8Array(pdfBuffer);

        return new NextResponse(pdfUint8Array, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="resume-${id}.pdf"`,
            }
        });
    } catch (error) {
        console.error("Error fetching PDF:", error);
        return NextResponse.json({ error: "PDF not found" }, { status: 404 });
    }
}
