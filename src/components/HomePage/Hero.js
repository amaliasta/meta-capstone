import React from "react";
import heroImg from "../../assets/restauranfood.jpg";
import classes from "./Hero.module.css";

import Chicago from "../UI/Chicago";
import CallToAction from "../UI/CallToAction";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/booking");
    };

    return (
        <main className={classes.hero}>
            <div className={classes.hero__text}>
                <Chicago />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <p>
                    Itaque soluta architecto reprehenderit consequatur totam
                    sequi corrupti ratione distinctio ad laborum dolorum, dicta
                    quae numquam doloribus assumenda, sapiente nobis, ea dolore!
                </p>
                <p>
                    Aperiam rerum aspernatur molestiae laudantium.
                </p>
                <CallToAction onClick={handleClick}>
                    Reserve a Table
                </CallToAction>
            </div>
            <picture className={classes.hero__img}>
                <img src={heroImg} alt="Food served at Little Lemon"></img>
            </picture>
        </main>
    );
};

export default Hero;
