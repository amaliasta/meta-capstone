import React from "react";

import classes from "./Specials.module.css";
import Menu from "../MenuPage/Menu";
import CallToAction from "../UI/CallToAction";
import { useNavigate } from "react-router-dom";

const Specials = () => {
    const navigate = useNavigate()

    const clickMenuHandler = () => {
        navigate("/menu");
    }

    return (
        <section className={classes.specials} id="menu">
            <div className={classes.specials__header}>
                <h2>Specials</h2>
                <CallToAction onClick={clickMenuHandler}>Online Menu</CallToAction>
            </div>
            <Menu />
        </section>
    );
};

export default Specials;
