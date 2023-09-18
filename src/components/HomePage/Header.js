import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Logo from "../../assets/Logo.svg";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const isMobile = screenWidth < 700;

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const openMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const cross = (
        <div className={classes.cross}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
        </div>
    );
    const hamburguer = <div className={classes.nav__btn}></div>;

    return (
        <header className={classes.header}>
            <section className={classes.header__content}>
                <NavLink onClick={openMenu} to="/">
                    <img
                        className={classes.header__logo}
                        src={Logo}
                        alt="Little Lemon Logo"></img>
                </NavLink>
                {isMobile ? (
                    <>
                        <button className={classes.wrapper} onClick={openMenu}>
                            {isOpen ? cross : hamburguer}
                        </button>
                        {isOpen && (
                            <div className={classes.mobile__menu}>
                                <Nav setIsOpen={setIsOpen}></Nav>
                            </div>
                        )}
                    </>
                ) : (
                    <Nav></Nav>
                )}
            </section>
        </header>
    );
};

export default Header;
