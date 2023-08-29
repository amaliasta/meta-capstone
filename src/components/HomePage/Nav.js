import React from "react";
import classes from "./Nav.module.css";

import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink>About</NavLink>
                </li>
                <li>
                    <NavLink>Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/booking">Reservations</NavLink>
                </li>
                <li>
                    <NavLink>Order Online</NavLink>
                </li>
                <li>
                    <NavLink>Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
