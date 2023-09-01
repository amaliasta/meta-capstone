import React from "react";
import classes from "./Bookings.module.css";

const Bookings = (props) => {
    const { bookings } = props;

    return (
        <section className={classes.bookings}>
            <h2>Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking}>
                        <span className={classes.date}>
                            {booking["res-date"]}
                        </span>
                        <span className={classes.time}>{booking["res-time"]}, </span>
                        <span className={classes.guests}>{booking.guests}</span>
                        <span className={classes.occasion}>{booking.occasion}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Bookings;
