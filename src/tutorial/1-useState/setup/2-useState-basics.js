import React, { useState } from "react";

const UseStateBasics = () => {
    // console.log(useState("default"));
    // const value = useState(1)[0];
    // const handler = useState(1)[1];
    // console.log(value, handler);

    const [text, setText] = useState("random title");
    const toggle = () => {
        if (text === "random title") {
            setText("Hello World");
        } else {
            setText("random title");
        }
    };

    return (
        <>
            <h1>{text}</h1>
            <button className="btn" onClick={toggle}>
                change Title
            </button>
        </>
    );
};

export default UseStateBasics;
