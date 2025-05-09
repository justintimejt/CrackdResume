import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing LaTeX id.' }, { status: 400 });
  }

  const texPath = path.join('/tmp', `${id}.tex`);

  try {
    const fileBuffer = await readFile(texPath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': `attachment; filename="resume-${id}.tex"`,
      },
    });
  } catch (error) {
    console.error('Error reading .tex file:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
