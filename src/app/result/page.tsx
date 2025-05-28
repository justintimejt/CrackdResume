'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaFilePdf, FaFileCode } from "react-icons/fa";



export default function ResultPage () {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [latex, setLatex] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
          setError('Missing resume ID');
          setLoading(false);
          return;
        }

        const fetchResumeData = async() => {
            try {
                const texRes = await fetch(`/api/tex?id=${id}`);
                if (!texRes.ok) throw new Error('Failed to fetch LaTeX');
                const latexContent = await texRes.text();
                setLatex(latexContent);

                const compileRes = await fetch('/api/compile-pdf-online', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ latex: latexContent }),
                  });
          
                  if (!compileRes.ok) {
                    const errorData = await compileRes.json();
                    throw new Error(errorData.error || 'PDF compilation failed');
                  }
          
                  // Create blob URL for the PDF
                  const pdfBlob = await compileRes.blob();
                  const url = URL.createObjectURL(pdfBlob);
                  setPdfUrl(url);
            } catch (err) {
                console.error('Error:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchResumeData();

        return () => {
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }
        };
    }, [id]);


    //local pdflatex implementation
    // const pdfUrl = `/api/get-pdf?id=${id}`;
    // const texUrl = `/api/tex?id=${id}`;

    // useEffect(() => {
    //     const fetchLatex = async () => {
    //         try {
    //             const res = await fetch(texUrl);
    //             setLatex(await res.text());
    //         } catch(err) {
    //             console.error('Failed to fetch LaTeX:', err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchLatex();
    // }, [id, texUrl]);

    // if (loading) return <div>Loading preview...</div>;

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
                    <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(latex)}`} download="resume.tex">
                        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 flex items-center gap-2">
                            Download Latex
                            <FaFileCode className="h-5 w-5 opacity-90" />
                        </button>
                        
                    </a>
                </div>
            </div>
            
        </div>
    );
};
