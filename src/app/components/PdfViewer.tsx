'use client';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

interface PdfViewerProps {
  pdfUrl: string | null;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (!pdfUrl) {
    return <p>Loading PDF...</p>;
  }

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
    </Worker>
  );
}
