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
            <h1 className="pb-5 text-xl font-semibold">Choose Resume Template:</h1>

            {/*Template Options*/}
            <div className="grid grid-cols-3 gap-10">
                {templates.map((template, index) => (
                    <button 
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`border border-amber-50 rounded-md shadow-lg bg-gray-100 p-6 transition transform hover:scale-105 duration-150 flex flex-col items-center gap-2 ${
                            selectedIndex === index
                                ? "ring-2 ring-blue-500 bg-blue-50"
                                : "hover:ring-1 hover:ring-blue-500"
                        }`}
                    >
                        <img src={template.image} alt={template.name} className="object-contain" />
                        <h2 className="text-center font-medium">{template.name}</h2>
                    </button>
                ))}
              </div>

            {/*Navigation Buttons*/}
            <div className="flex justify-between pt-6">
                <button className="border rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition transform hover:scale-105">
                    <FaArrowLeft />
                    Back to Home
                </button>

                <button
                    onClick={handleNext}
                    disabled={selectedIndex === null}
                    className={`border rounded-lg px-4 py-2 flex items-center gap-2 ${
                        selectedIndex === null
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-blue-500 hover:text-white transition transform hover:scale-105"
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