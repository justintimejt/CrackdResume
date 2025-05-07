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
}