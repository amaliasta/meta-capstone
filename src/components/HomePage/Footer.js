import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div>
                <img
                    className={classes.logo}
                    src={Logo}
                    alt="Little Lemon logo"></img>
            </div>
            <div>
                <ul className={classes.doormat}>
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
            <div>
                <ul className={classes.doormat}>
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
            <div>
                <ul className={classes.doormat}>
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
