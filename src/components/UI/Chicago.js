import React from "react";
import classes from "./Chicago.module.css";

const Chicago = (props) => {
    const titleClasses = `${classes.titles} ${
        props.highContrast ? classes.titlesHC : classes.titlesLC
    }`;
    return (
        <div className={titleClasses}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
        </div>
    );
};

export default Chicago;
