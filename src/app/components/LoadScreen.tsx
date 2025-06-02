'use client';

import { useEffect, useState } from 'react';
import { PiMagicWandBold } from "react-icons/pi";
import { FaRobot } from "react-icons/fa";


const initialMessages = [
  "Organizing your work experience...",
  "Formatting your top projects...",
  "Listing your technical skills...",
  "Polishing the final layout..."
];

const alternateIcon = <FaRobot className='text-white text-5xl animate-spin-slow' />;
const alternateMessage = "Activating AI polish mode...";

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showAlternate, setShowAlternate] = useState(false);


  useEffect(() => {
    const totalDuration = 26500; 
    const intervalDuration = 200; 
    const steps = totalDuration / intervalDuration; 
    const increment = 100 / steps;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, intervalDuration);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % initialMessages.length);
    }, 5000); // every 5 seconds

    const alternateTimeout = setTimeout(() => {
      setShowAlternate(true);
    }, 20000); // after 20 seconds

    return () =>{
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(alternateTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-blue-600 rounded-full opacity-20 blur-sm"></div>
        <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full">
          {showAlternate ? alternateIcon : <PiMagicWandBold className='text-white text-5xl animate-spin-slow' />}
        </div>
      </div>


      <h2 className="text-2xl font-semibold text-white mb-6">
        {showAlternate ? alternateMessage : initialMessages[messageIndex]}
      </h2>

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
