'use client';

import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaFilePdf, FaFileCode } from "react-icons/fa";
import { SiOverleaf } from "react-icons/si";
import { createClient } from '@supabase/supabase-js';




export default function ResultPage () {
    const searchParams = useSearchParams();
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [latex, setLatex] = useState<string>('');


    //edit in overleaf logic
    function utf8ToBase64(str: string) {
        return btoa(unescape(encodeURIComponent(str)));
      }

    const base64Tex = latex
      ? `data:application/x-tex;base64,${utf8ToBase64(latex)}`
      : null;
    
    const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
      
    useEffect(() => {
    const id = searchParams.get("id");
    if (!id) return;
    
    const fetchResume = async () => {
        try {
        const { data, error } = await supabase
            .from("resumes")
            .select("pdf_url, tex_url")
            .eq("id", id)
            .single();
    
        if (error) {
            console.error("Error fetching resume from Supabase:", error);
            return;
        }
    
        if (data) {
            setPdfUrl(data.pdf_url);
            // Fetch the LaTeX source from the tex_url
            const texRes = await fetch(data.tex_url);
            const texText = await texRes.text();
            setLatex(texText);
        }
        } catch (err) {
            console.error("Unexpected error fetching data:", err);
        }
        };
    
      fetchResume();
    }, [searchParams]);



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
                        <button className="px-8 py-3 bg-gradient-to-r bg-white text-black font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 transform hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                            Download PDF
                            <FaFilePdf className="h-5 w-5 opacity-90" />
                        </button>
                        
                    </a>
                    <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(latex)}`} download="resume.tex">
                        <button className="px-8 py-3 bg-gradient-to-r bg-white text-black font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 transform hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                            Download Latex
                            <FaFileCode className="h-5 w-5 opacity-90" />
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
                            <button className="flex flex-wrap px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-cyan-500 font-semibold items-center gap-2 hover:scale-105 transform hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                                Edit in Overleaf
                                <SiOverleaf />
                            </button>
                        </a>
                    )}
                    
                </div>
            </div>
            
        </div>
    );
};
