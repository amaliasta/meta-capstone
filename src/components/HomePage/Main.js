import React from "react";
import heroImg from "../../assets/restauranfood.jpg";
import classes from "./Main.module.css";

import Chicago from "../UI/Chicago";
import CallToAction from "../UI/CallToAction";

const Main = () => {
    return (
        <main className={classes.hero}>
            <div className={classes.hero__text}>
               <Chicago />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <CallToAction />
            </div>
            <picture className={classes.hero__img}>
                <img src={heroImg} alt="Food served at Little Lemon"></img>
            </picture>
        </main>
    );
};

export default Main;
