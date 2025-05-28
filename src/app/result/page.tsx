'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaFilePdf, FaFileCode } from "react-icons/fa";
import { Buffer } from "buffer";



export default function ResultPage () {
    const searchParams = useSearchParams();
    // const id = searchParams.get('id');
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [latex, setLatex] = useState<string>('');

    //edit in overleaf logic
    function utf8ToBase64(str: string) {
        return btoa(unescape(encodeURIComponent(str)));
      }

    const base64Tex = latex
      ? `data:application/x-tex;base64,${utf8ToBase64(latex)}`
      : null;


    useEffect(() => {
        const urlParam = searchParams.get("url");
        // const latexParam = searchParams.get("latex");
        if (urlParam) setPdfUrl(decodeURIComponent(urlParam));
        // if (latexParam) setLatex(decodeURIComponent(latexParam));

    }, [searchParams]);

    if (!pdfUrl) return <p>No PDF URL provided.</p>;


    return (
        <div className ='bg-black min-h-screen'>
            <div className="flex flex-col items-center px-4 py-6">
                <h1 className ='text-3xl md:text-4xl font-semibold text-center mb-6 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]'>
                    Download Your Resume
                </h1>
                <p className='text-center text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
                    Your interview-ready resume is available as PDF or LaTex - go impress those recruiters!
                </p>
        
                <div className="w-full max-w-4xl h-[70vh] border shadow-lg">
                    <iframe 
                        src={pdfUrl || '#'}
                        className="w-full h-full rounded-md"
                        title="PDF Preview"
                    />
                </div>

                {/*Download buttons*/}
                <div className="mt-6 flex flex-wrap gap-4">
                    <a href={pdfUrl || '#'} download="resume.pdf">
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-cyan-500 hover:to-blue-500 flex items-center gap-2">
                            Download PDF
                            <FaFilePdf className="h-5 w-5 opacity-90" />
                        </button>
                        
                    </a>
                    {base64Tex && (
                        <a
                            href={`https://www.overleaf.com/docs?snip_uri=${encodeURIComponent(
                                base64Tex
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                Edit in Overleaf
                            </button>
                        </a>
                    )}
                    {/* <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(latex)}`} download="resume.tex">
                        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 flex items-center gap-2">
                            Download Latex
                            <FaFileCode className="h-5 w-5 opacity-90" />
                        </button>
                        
                    </a> */}
                </div>
            </div>
            
        </div>
    );
};
