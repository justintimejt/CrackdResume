"use client";

import React from 'react';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { templatePrompts } from "../constants/templatePrompts";

type Template = {
    name: string;
    image: string;
    prompt: string;
}

type Props = {
    onSelect: (template: Template) => void;
};

const TemplateSelector = ({ onSelect }: Props) => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const templates: Template[] = [
        {
          name: "Jake's Resume",
          image: "/assets/images/jakes-resume.png",
          prompt: templatePrompts["Jake's Resume"]
        },
        {
          name: "Modern Deedy",
          image: "/assets/images/jakes-resume.png",
          prompt: templatePrompts["Modern Deedy"]
        },
        {
          name: "SWE Resume",
          image: "/assets/images/jakes-resume.png",
          prompt: templatePrompts["SWE Resume"]
        },
      ];

    const handleNext = () => {
        if (selectedIndex !== null) {
            onSelect(templates[selectedIndex]);
        }
    };

    return (
        <div className="mx-auto">
            <h1 className=" text-white pb-5 text-xl font-semibold">Choose Resume Template:</h1>

            {/*template options*/}
            <div className="grid grid-cols-3 gap-10">
                {templates.map((template, index) => (
                    <button 
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`border border-amber-50 rounded-md shadow-lg bg-white p-6 transition transform hover:scale-105 duration-150 flex flex-col items-center gap-2 filter drop-shadow-[0_4px_8px_rgba(255,255,255,0.6)] ${
                            selectedIndex === index
                                ? "ring-2 ring-blue-500 bg-blue-50"
                                : "hover:ring-1 hover:ring-blue-500"
                        }`}
                    >
                        <img src={template.image} alt={template.name} className="object-contain rounded-lg" />
                        <h2 className="text-center font-medium pt-3">{template.name}</h2>
                    </button>
                ))}
              </div>

            {/*navigation Buttons*/}
            <div className="flex justify-between pt-6">
                <button className="border text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition transform hover:scale-105">
                    <FaArrowLeft />
                    Back to Home
                </button>

                <button
                    onClick={handleNext}
                    disabled={selectedIndex === null}
                    className={`border rounded-lg px-4 py-2 flex items-center gap-2 ${
                        selectedIndex === null
                        ? "text-white opacity-50 cursor-not-allowed"
                        : "text-white hover:bg-blue-500 hover:text-white transition transform hover:scale-105"
                    }`}
                >
                    Next
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default TemplateSelector;