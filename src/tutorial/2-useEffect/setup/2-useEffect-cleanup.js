import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", checkSize);
        return () => {
            window.removeEventListener("resize", checkSize);
        };
    });

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    return (
        <>
            <h1>window</h1>
            <h2>{size} px</h2>
        </>
    );
};

export default UseEffectCleanup;
