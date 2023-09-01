import React from "react";
import classes from './Chicago.module.css'

const Chicago = (props) => {
    const titleClass = props.highContrast ? classes.titlesHC : classes.titles;
    return (
        <div className={titleClass}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
        </div>
    );
};

export default Chicago;
