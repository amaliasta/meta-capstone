import React, { useEffect } from "react";
import classes from "./Nav.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
    const { hash, key } = useLocation();

    useEffect(() => {
        if (hash === "") {
            window.scrollTo(0, 0);
        } else {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash, key]);

    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/#about"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/#menu"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/booking"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        Reservations
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/order"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        Order Online
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
