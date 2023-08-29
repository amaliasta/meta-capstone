import React from "react";
import Nav from "./Nav";
import Logo from "../../assets/Logo.svg"
import classes  from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={Logo} alt="Little Lemon Logo" className={classes.logo}></img>
            <Nav></Nav>
        </header>
    );
};

export default Header;
