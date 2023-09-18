import React from "react";
import classes from "./About.module.css";
import Chicago from "../UI/Chicago";
import restaurant1 from "../../assets/restaurant.jpg";
import restaurant2 from "../../assets/restaurant chef B.jpg";

const About = () => {
    return (
        <section className={classes.about} id="about">
            <div className={classes.about__text}>
                <Chicago highContrast={true} />
                <p>
                    Little Lemon was born from a passion for exquisite cuisine
                    and a love for this iconic city. Our journey began with a
                    simple idea – to offer a diverse culinary experience that
                    celebrates Chicago's rich food culture. Today, we're proud
                    to be a cherished part of this vibrant community, inviting
                    guests to savor the flavors of Chicago, one bite at a time.
                </p>
            </div>
            <div className={classes.about__images}>
                <picture className={classes.about__images_1}>
                    <img
                        src={restaurant1}
                        alt="Inside Little Lemon restaurant"></img>
                </picture>
                <picture className={classes.about__images_2}>
                    <img
                        src={restaurant2}
                        alt="Little Lemon chef working"></img>
                </picture>
            </div>
        </section>
    );
};

export default About;
