import React from "react";
import classes from "./Card.module.css";

const Card = ({ alt, src, name, children }) => {
    return (
        <div className={classes.card}>
            <h4>{name}</h4>
            <picture>
                <img src={src} alt={alt} className={classes.avatar}></img>
            </picture>
            <p>{children}</p>
        </div>
    );
};

export default Card;
