import React from "react";
import classes from "./StyledNavLink.module.css";
import { NavLink } from "react-router-dom";

const StyledNavLink = ({handleClick, route, children}) => {

    return (
        <li className={classes.list__item}>
            <NavLink
                onClick={handleClick}
                to={route}
                className={({ isActive }) =>
                    isActive ? classes["currently-selected"] : ""
                }>
                {children}
            </NavLink>
        </li>
    );
};

export default StyledNavLink;
