import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.wrapper}>
                <div className={classes.logo}>
                    <img src={Logo} alt="Little Lemon logo"></img>
                </div>
                <div className={classes.doormat__main}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/booking">Reservations</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order">Order Online</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={classes.doormat__socials}>
                    <ul>
                        <li>
                            <button>Facebook</button>
                        </li>
                        <li>
                            <button>Instagram</button>
                        </li>
                        <li>
                            <button>Twitter</button>
                        </li>
                    </ul>
                </div>
                <div className={classes.doormat__info}>
                    <ul>
                        <li>
                            <button>Address: 29th Blvd, Chicago</button>
                        </li>
                        <li>
                            <button>Email: littlelemon@gmail.com</button>
                        </li>
                        <li>
                            <button>Phone: 312 525</button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
