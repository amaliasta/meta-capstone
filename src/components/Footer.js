import React from "react";
import classes from "./Footer.module.css";
import Logo from "../assets/Logo.svg"


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div><img src={Logo}></img></div>
            <div>
                <ul className={classes.doormat}>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">Reservations</a>
                    </li>
                    <li>
                        <a href="">Order Online</a>
                    </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className={classes.doormat}>
                    <li>
                        <a href="">Address: 29th street East Chicago</a>
                    </li>
                    <li>
                        <a href="">Email: littlelemon@gmail.com</a>
                    </li>
                    <li>
                        <a href="">Phone: 49 911525</a>
                    </li>
                </ul>
            </div>
            <div>
            <ul className={classes.doormat}>
                    <li>
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="">Twitter</a>
                    </li>
                </ul>
            </div>
            <div></div>
        </footer>
    );
};

export default Footer;
