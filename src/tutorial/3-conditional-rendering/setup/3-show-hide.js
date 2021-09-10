import React, { useState, useEffect } from "react";

const ShowHide = () => {
    const [show, setShow] = useState(false);
    const showComponent = () => {
        setShow(!show);
    };
    return (
        <>
            <button className="btn" onClick={showComponent}>
                show/hide
            </button>
            {show && <Item />}
        </>
    );
};

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", newSize);

        return () => {
            window.removeEventListener("resize", newSize);
        };
    });

    const newSize = () => {
        setSize(window.innerWidth);
    };
    return (
        <div style={{ marginTop: "2rem" }}>
            <h1>window</h1>
            <h2>size : {size}</h2>
        </div>
    );
};

export default ShowHide;
