import React from "react";
import classes from "./About.module.css";
import Chicago from "../UI/Chicago";
import restaurant1 from "../../assets/restaurant.jpg";
import restaurant2 from "../../assets/restaurant chef B.jpg";

const About = () => {
    return (
        <section className={classes.section} id="about">
            <div className={classes.text}>
                <Chicago highContrast={true} />
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                </p>
            </div>
            <picture className={classes.image__1}>
                <img
                    src={restaurant1}
                    alt="Inside Little Lemon restaurant"></img>
            </picture>
            <picture className={classes.image__2}>
                <img src={restaurant2} alt="Little Lemon chef working"></img>
            </picture>
        </section>
    );
};

export default About;
