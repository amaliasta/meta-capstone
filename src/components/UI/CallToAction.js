import React from "react";
import classes from "./CallToAction.module.css";

const CallToAction = ({ disabled, onClick, submit, children }) => {
    const disabledClass = disabled ? classes.disabled : "";

    return (
        <button
            className={`${classes.btn} ${disabledClass}`}
            onClick={onClick}
            data-testid="submit"
            disabled={disabled}
            type={submit ? "submit" : "button"}>
            {children}
        </button>
    );
};

export default CallToAction;
