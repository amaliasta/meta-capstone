import React from "react";
import classes from "./BookingSlot.module.css";

const BookingSlot = ({ slots }) => {
    return (
        slots &&
        slots.map((times, idx) => (
            <li className={classes.slots} key={idx}>
                {/* <span>{date}</span> */}
                <span>{times}</span>
            </li>
        ))
    );
};

export default BookingSlot;
