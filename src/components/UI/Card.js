import React from "react";
import classes from './Card.module.css'

const Card = ( props ) => {
    const { alt, children } = props;
    return (
        <div className={classes.card}>
            <h4>Rating</h4>
            <picture>
                <img src="" alt={props.alt}></img>
            </picture>
            <p>{children}</p>
        </div>
    );
};

export default Card;
