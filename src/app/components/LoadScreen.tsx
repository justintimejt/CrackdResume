'use client';

import { useEffect, useState } from 'react';

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev >= 95 ? prev : prev + Math.floor(Math.random() * 10) + 1
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Generating your resume...</h2>

      {/* Progress Bar Container */}
      <div className="w-full max-w-md bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-600 h-4 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Please wait a moment. This usually takes a few seconds.
      </p>
    </div>
  );
}
