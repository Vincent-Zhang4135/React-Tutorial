import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [toggle, setToggle] = useState(false);
    const [isError, setIsError] = useState(false);

    const switchToggle = () => {
        setToggle(!toggle);
        setIsError(!isError);
    };

    return (
        <>
            <h1>{toggle || "hello"}</h1>
            {toggle && <h1>hello world</h1>}
            <button className="btn" onClick={switchToggle}>
                Toggle Error
            </button>
            {isError ? <p>there is no error</p> : <p>there is an error</p>}
        </>
    );
};

export default ShortCircuit;
