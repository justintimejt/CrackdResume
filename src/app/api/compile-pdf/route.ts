// import { writeFile, access } from 'fs/promises';
// import { exec } from 'child_process';
// import { promisify } from 'util';
// import { NextResponse } from 'next/server';
// import { v4 as uuidv4 } from 'uuid';
// import path from 'path';
// import fs from 'fs';

// const execAsync = promisify(exec);

// export async function POST(req: Request) {
//     console.log('PDF compilation request received');

//     const { latex } = await req.json();

//     const id = uuidv4();
//     const tmpDir = '/tmp'
//     const texPath = path.join(tmpDir,`${id}.tex`);
//     const pdfPath = path.join(tmpDir,`${id}.pdf`);

//     console.log("PDF ID:", id);
//     console.log(`Writing LaTeX to: ${texPath}`);
//     await writeFile(texPath, latex);

//     try {
//         //COMPILE LATEX TO PDF using pdflatex
//         console.log("Compiled PDF ID:", id);

//         const { stdout, stderr } = await execAsync(
//             `/Library/TeX/texbin/pdflatex -interaction=nonstopmode -output-directory=${tmpDir} ${texPath}`
//         )

//         console.log('pdflatex stdout:', stdout);
//         console.log('pdflatex stderr:', stderr);

//         await access(pdfPath);

//         console.log(`PDF successfully created at: ${pdfPath}`);
        
//         return NextResponse.json({ id });

//     } catch (error) {
//         console.log("PDF Compile Error: ", error);
//         return NextResponse.json({ error: "Failed to compile PDF"}, { status: 500 });
//     }
// }