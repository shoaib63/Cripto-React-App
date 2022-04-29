import React from 'react';

// Gif
import spinner from "../gif/spinner.gif";

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="LOADING..." />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;