import React, { useState } from "react";
import classes from "./BookingForm.module.css";
import CallToAction from "../UI/CallToAction";
import Bookings from "./Bookings";

const BookingForm = (props) => {
    const { bookingInfo, setBookingInfo, times, occasions } = props;
    // const availableTimes = [
    //     "17:00",
    //     "18:00",
    //     "19:00",
    //     "20:00",
    //     "21:00",
    //     "22:00",
    // ];

    // const occasions = ["Anniversary", "Birthday", "Other"];

    const [isInputValid, setIsInputValid] = useState({
        "res-date": false,
        "res-time": true,
        guests: true,
        occasion: true,
    });

    // const [reservationInfo, setReservationInfo] = useState({
    //     "res-date": "",
    //     "res-time": availableTimes[0],
    //     guests: 1,
    //     occasion: occasions[2],
    // });

    const [confirmedBookings, setConfirmedBookings] = useState([])

    const clickHandler = (e) => {
        e.preventDefault();
        setConfirmedBookings(prev => ([...prev, bookingInfo]))
    };

    const updateReservationInfo = (e) => {
        const { id, value } = e.target;
        setBookingInfo((prev) => {
            return {
                ...prev,
                [e.target.id]: e.target.value,
            };
        });
        checkValidity(id, value);
    };

    const checkValidity = (id, val) => {
        let isValid = true;

        switch (id) {
            case "res-date":
                const parsedDate = new Date(val);
                isValid = parsedDate instanceof Date;
                break;
            case "res-time":
                isValid = times.includes(val);
                break;
            case "guests":
                isValid = val > 0 && val <= 11;
                break;
            case "occasion":
                isValid = occasions.includes(val);
                break;
            default:
                console.log("unknown input");
        }

        setIsInputValid((prev) => ({ ...prev, [id]: isValid }));
    };

    return (
        <>
            <form className={classes.form}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    onChange={updateReservationInfo}
                    value={bookingInfo["res-date"]}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time "
                    onChange={updateReservationInfo}
                    value={bookingInfo["res-time"]}>
                    {times.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={bookingInfo.guests}
                    onChange={updateReservationInfo}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    onChange={updateReservationInfo}
                    value={bookingInfo["occasion"]}>
                    {occasions.map((occ) => (
                        <option key={occ}>{occ}</option>
                    ))}
                </select>
                <CallToAction
                    type="submit"
                    onClick={clickHandler}
                    disabled={
                        !Object.values(isInputValid).every((isValid) => isValid)
                    }>
                    Make Your reservation
                </CallToAction>
            </form>
            <Bookings bookings={confirmedBookings} />
        </>
    );
};
export default BookingForm;
