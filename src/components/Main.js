import React from "react";
import heroImg from "../assets/restauranfood.jpg";
import classes from "./Main.module.css";

const Main = () => {
    return (
        <main className={classes.hero}>
            <div className={classes.hero__text}>
                <div className={classes.hero__text_titles}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <button className={classes.hero__text_btn}>Reserve a table</button>
            </div>
            <picture className={classes.hero__img}>
                <img src={heroImg} alt="Food served at Little Lemon"></img>
            </picture>
        </main>
    );
};

export default Main;
