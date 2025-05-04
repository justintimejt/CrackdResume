"use client"; //running on browser
import React from 'react';
import { useState } from 'react';

const Test = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    const byeBye = () => {
        setCount(prev => prev - 1);
    };

    return (
        <div>
            <button onClick={handleClick} className="flex border rounded-md">Count: {count}</button>
            <button onClick={byeBye} className="justify-between">Bye Bye</button>
        </div>
    );
};

export default Test;