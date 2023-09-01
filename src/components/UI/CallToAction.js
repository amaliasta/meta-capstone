import React from "react";
import classes from "./CallToAction.module.css";

const CallToAction = ({ ...props }) => {
    const disabledClass = props.disabled ? classes.disabled : '';

    return (
        <button
            className={`${classes.btn} ${disabledClass}`}
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type ? "submit" : "button"}>
            {props.children}
        </button>
    );
};

export default CallToAction;
