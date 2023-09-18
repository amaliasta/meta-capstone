import React, { useEffect } from "react";
import classes from "./Nav.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Nav = (props) => {
    // const { hash, key } = useLocation();

    // useEffect(() => {
    //     if (hash === "") {
    //         window.scrollTo(0, 0);
    //     } else {
    //         const id = hash.replace("#", "");
    //         const element = document.getElementById(id);
    //         if (element) {
    //             element.scrollIntoView({ behavior: "smooth" });
    //         }
    //     }
    // }, [hash, key]);

    const { setIsOpen } = props;

    // Check if setIsOpen is a function before using it
    const closeMobileMenu = () => {
        setIsOpen((prev) => {
            if (prev) {
                return !prev;
            }
        });
    };

    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li>
                    <NavLink
                        onClick={closeMobileMenu}
                        to="/"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={closeMobileMenu}
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={closeMobileMenu}
                        to="/menu"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={closeMobileMenu}
                        to="/booking"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        Reservations
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={closeMobileMenu}
                        to="/order"
                        className={({ isActive }) =>
                            isActive ? classes["currently-selected"] : ""
                        }>
                        Order Online
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={closeMobileMenu}
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
