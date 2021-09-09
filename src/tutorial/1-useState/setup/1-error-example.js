import React from "react";

const ErrorExample = () => {
    let title = "title";
    const eventClick = () => {
        title = "hello people";
        console.log(title);
    };
    return (
        <>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={eventClick}>
                click me
            </button>
        </>
    );
};

export default ErrorExample;
