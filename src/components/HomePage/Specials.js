import React from "react";

import classes from "./Specials.module.css";
import MenuPage from "../MenuPage/MenuPage";

const Specials = () => {
    return (
        <section className={classes.specials}>
            <div className={classes.specials__header}>
                <h3>Specials</h3>
                <button>Online Menu</button>
            </div>
            <MenuPage />
        </section>
    );
};

export default Specials;
