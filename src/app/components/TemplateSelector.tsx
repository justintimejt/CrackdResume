"use client";

import React from 'react';
import { useState } from 'react';

const TemplateSelector = () => {
    return (
        <div className="w-2/3 mx-auto">
            <h1 className="pb-5">Choose Resume Template:</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">

                <button className ="border rounded-md p-10 max-w-xl">
                    <img src="/assets/images/jakes-resume.png" alt="Jakes Resume" />
                    <h2>Jake's Resume</h2>
                </button>

                <button className ="border rounded-md p-10 max-w-xl">
                    <img src="/assets/images/jakes-resume.png" alt="Jakes Resume" />
                    <h2>Jake's Resume</h2>
                </button>

                <button className ="border rounded-md p-10 max-w-xl">
                    <img src="/assets/images/jakes-resume.png" alt="Jakes Resume" />
                    <h2>Jake's Resume</h2>
                </button>

                <button className ="border rounded-md p-10 max-w-xl">
                    <img src="/assets/images/jakes-resume.png" alt="Jakes Resume" />
                    <h2>Jake's Resume</h2>
                </button>

                <button className ="border rounded-md p-10 max-w-xl">
                    <img src="/assets/images/jakes-resume.png" alt="Jakes Resume" />
                    <h2>Jake's Resume</h2>
                </button>

                <button className ="border rounded-md p-10 max-w-xl">
                    <img src="/assets/images/jakes-resume.png" alt="Jakes Resume" />
                    <h2>Jake's Resume</h2>
                </button>
            </div>
            
            <div className="flex justify-between pt-6">
                <button className="border rounded-lg px-4 py-2">Back to Home</button>
                <button className="border rounded-lg px-4 py-2">Next</button>
            </div>
        </div>
    );
};

export default TemplateSelector;