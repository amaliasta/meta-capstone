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
        <section className={classes.hero}>
            <main className={classes.hero__content}>
                <div className={classes.hero__text}>
                    <Chicago />
                    <div className={classes.hero__paragraphs}>
                        <p>
                            Discover a hidden gem in Chicago's culinary scene.
                            Our restaurant offers a diverse menu, blending local
                            flavors with global inspirations.
                        </p>
                        <p>
                            Located in the heart of the city, Little Lemon
                            promises an unforgettable culinary journey that
                            captures the essence of Chicago's food culture.
                        </p>
                        <p>
                            Let's celebrate Chicago's culinary delights together!
                        </p>
                    </div>
                    <CallToAction onClick={handleClick}>
                        Reserve a Table
                    </CallToAction>
                </div>
                <picture className={classes.hero__img}>
                    <img src={heroImg} alt="Food served at Little Lemon"></img>
                </picture>
            </main>
        </section>
    );
};

export default Hero;
