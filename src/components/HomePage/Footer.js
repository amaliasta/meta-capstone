import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../assets/footer-logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.wrapper}>
                <div className={classes.logo}>
                    <img src={Logo} alt="Little Lemon logo"></img>
                </div>
                <div className={classes.doormat__main}>
                    <h4>Navigation</h4>
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
                    <h4>Socials</h4>
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
                    <h4>Contacts</h4>
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
