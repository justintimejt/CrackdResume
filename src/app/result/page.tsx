import React from 'react';

interface ResultPageProps {
    id: string;
}

const ResultPage = ({ id }: ResultPageProps) => {
    const pdfUrl = `/api/pdf?id=${id}`;
    const texUrl = `/api/tex?id=${id}`;


    return (
        <div className="flex flex-col items-center px-4 py-6">
            <h1 className="w-full max-w-4xl h-[90vh] border shadow-lg"></h1>

            {/*PDF PREVIEW*/}
            <div className="w-full max-w-4xl h-[90vh] border shadow-lg">
                <iframe src={pdfUrl} width="100%" height="100%" className="rounded-md"/>
            </div>

            {/*Download buttons*/}
            
        </div>

    )
}