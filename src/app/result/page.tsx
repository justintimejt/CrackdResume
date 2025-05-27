'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Preview from '../components/Preview';


export default function ResultPage () {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [latex, setLatex] = useState('');
    const [loading, setLoading] = useState(true);

    if (!id) {
        return <div>Error: Missing resume ID.</div>
    }

    const pdfUrl = `/api/get-pdf?id=${id}`;
    const texUrl = `/api/tex?id=${id}`;

    useEffect(() => {
        const fetchLatex = async () => {
            try {
                const res = await fetch(texUrl);
                setLatex(await res.text());
            } catch(err) {
                console.error('Failed to fetch LaTeX:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchLatex();
    }, [id, texUrl]);

    if (loading) return <div>Loading preview...</div>;

    return (
        <div className ='bg-black min-h-screen'>
            <div className="flex flex-col items-center px-4 py-6">
                <h1 className ='text-3xl md:text-4xl font-semibold text-center mb-6 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]'>
                    Your Resume is Ready!
                </h1>
                <p className='text-center text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
                    Download as a pdf or tex file - happy job hunting :/
                </p>
        
                <div className="w-full max-w-4xl h-[70vh] border shadow-lg">
                    <iframe 
                        src={pdfUrl}
                        className="w-full h-full rounded-md"
                        title="PDF Preview"
                    />
                </div>

                {/*Download buttons*/}
                <div className="mt-6 flex flex-wrap gap-4">
                    <a href={pdfUrl} download="resume.pdf">
                        <button className="px-4 py-4 bg-blue-600 text-white rounded hover:bg-blue-700">Download PDF</button>
                    </a>
                    <a href={texUrl} download="resume.tex">
                        <button className="px-4 py-4 bg-green-600 text-white rounded hover:bg-green-700">Download .tex</button>
                    </a>
                </div>
            </div>
        </div>
    );
};
