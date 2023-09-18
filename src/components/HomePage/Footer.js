import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div  className={classes.logo}>
                <img
                    src={Logo}
                    alt="Little Lemon logo"></img>
            </div>
            <div className={classes.doormat__main}>
                <ul>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>About</button>
                    </li>
                    <li>
                        <button>Menu</button>
                    </li>
                    <li>
                        <button>Reservations</button>
                    </li>
                    <li>
                        <button>Order Online</button>
                    </li>
                    <li>
                        <button>Login</button>
                    </li>
                </ul>
            </div>
            <div className={classes.doormat__info}>
                <ul>
                    <li>
                        <button>Address: 29th street East Chicago</button>
                    </li>
                    <li>
                        <button>Email: littlelemon@gmail.com</button>
                    </li>
                    <li>
                        <button>Phone: 49 911525</button>
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
        </footer>
    );
};

export default Footer;
