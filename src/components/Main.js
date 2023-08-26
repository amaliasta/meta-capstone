import React from "react";
import heroImg from "../assets/restauranfood.jpg";
import classes from "./Main.module.css";

const Main = () => {
    return (
        <main className={classes.main}>
            <section className={classes.hero__title}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className={classes.btn}>
                    Reserve a table
                </button>
            </section>
            <img
                className={classes.hero__img}
                src={heroImg}
                alt="Food served at Little Lemon"></img>
        </main>
    );
};

export default Main;
