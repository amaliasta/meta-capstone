import React from "react";
import classes from './Card.module.css'

const Card = ( {...props} ) => {
    return (
        <div className={classes.card}>
            <h4>Rating</h4>
            <picture>
                <img src="" alt={props.alt}></img>
            </picture>
            <p>{props.children}</p>
        </div>
    );
};

export default Card;
