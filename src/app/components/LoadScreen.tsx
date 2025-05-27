'use client';

import { useEffect, useState } from 'react';
import { PiMagicWandBold } from "react-icons/pi";


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
    <div className="flex flex-col items-center justify-center px-6">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-blue-600 rounded-full opacity-20 blur-sm"></div>
        <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full">
          <PiMagicWandBold className='text-white text-5xl'/>
        </div>
      </div>


      <h2 className="text-2xl font-semibold text-white mb-6">Generating your resume...</h2>

      {/* Progress Bar Container */}
      <div className="w-full max-w-md bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-br from-blue-500 to-cyan-400 h-4 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-white mt-4">
        Please wait a moment. This usually takes a few seconds.
      </p>
    </div>
  );
}
