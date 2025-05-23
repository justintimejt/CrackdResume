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
        <div className="flex flex-col items-center px-4 py-6">
            {/* <Preview latex={latex} /> */}
      
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
    );
};
