import React from "react";
import classes from "./Nav.module.css";
import StyledNavLink from "../UI/StyledNavLink";

const Nav = (props) => {
    const { setIsOpen } = props;

    const closeMobileMenu = () => {
        if (setIsOpen) {
            setIsOpen((prev) => (prev ? !prev : !prev));
        }
    };

    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <StyledNavLink handleClick={closeMobileMenu} route="/">
                    Home
                </StyledNavLink>
                <StyledNavLink handleClick={closeMobileMenu} route="/about">
                    About
                </StyledNavLink>
                <StyledNavLink handleClick={closeMobileMenu} route="/menu">
                    Menu
                </StyledNavLink>
                <StyledNavLink handleClick={closeMobileMenu} route="/booking">
                    Reservations
                </StyledNavLink>
                <StyledNavLink handleClick={closeMobileMenu} route="/order">
                    Order Online
                </StyledNavLink>
                <StyledNavLink handleClick={closeMobileMenu} route="/login">
                    Login
                </StyledNavLink>
            </ul>
        </nav>
    );
};

export default Nav;
