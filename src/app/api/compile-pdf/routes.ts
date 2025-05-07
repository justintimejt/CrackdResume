import { writeFile } from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const execAsync = promisify(exec);

export async function POST(req: Request) {
    const { latex } = await req.json();

    const id = uuidv4();
    const texPath = `/tmp/${id}.tex`;
    const pdfDir = `/tmp`;

    try {
        await writeFile(texPath, latex);

        //COMPILE LATEX TO PDF using pdflatex
        await execAsync(`pdflatex -output-directory=${pdfDir} ${texPath}`);
        
        return NextResponse.json({ id });
    } catch (error) {
        console.log("PDF Compile Error: ", error);
        return NextResponse.json({ error: "Failed to compile PDF"}, { status: 500 });
    }
}