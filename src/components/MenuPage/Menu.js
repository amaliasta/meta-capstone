import React from "react";
import bruschetta from "../../assets/Bruschetta.jpg";
import greek from "../../assets/greek salad.jpg";
import dessert from "../../assets/lemon dessert.jpg";
import classes from "./Menu.module.css";

const Menu = () => {
    return (
        <div className={classes.menu__items}>
            <article className={classes.menu__item}>
                <picture className={classes.menu__img}>
                    <img src={greek} alt="Greek Salad"></img>
                </picture>
                <div className={classes.menu__details}>
                    <div className={classes.menu__title}>
                        <h4>Greek Salad</h4>
                        <span>$12.99</span>
                    </div>
                    <p>
                        Our famous greek salad: crispy lettuce, peppers,
                        olives and our Chicago-style feta cheese, garnished with
                        crunchy garlic and rosemary croutons.
                    </p>
                </div>
            </article>
            <article className={classes.menu__item}>
                <picture className={classes.menu__img}>
                    <img src={bruschetta} alt="Bruschetta"></img>
                </picture>
                <div className={classes.menu__details}>
                    <div className={classes.menu__title}>
                        <h4>Bruschetta</h4>
                        <span>$5.99</span>
                    </div>
                    <p>
                        Our Bruschetta is made from grilled bread that has been
                        smeared with garlic and seasoned with salt and olive
                        oil.
                    </p>
                </div>
            </article>
            <article className={classes.menu__item}>
                <picture className={classes.menu__img}>
                    <img src={dessert} alt="Lemon Dessert"></img>
                </picture>
                <div className={classes.menu__details}>
                    <div className={classes.menu__title}>
                        <h4>Lemon Dessert</h4>
                        <span>$5.00</span>
                    </div>
                    <p>
                        This comes straight from grandma’s recipe book, every
                        ingredient as authentic as
                        can be imagined.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Menu;
