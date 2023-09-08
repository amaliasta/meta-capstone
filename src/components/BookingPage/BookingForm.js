import React, { useState } from "react";
import classes from "./BookingForm.module.css";
import CallToAction from "../UI/CallToAction";
import { submitAPI } from "../../api/mock-api";

const BookingForm = (props) => {
    const { formState, setFormState, times } = props;

    const occasions = ["Anniversary", "Birthday", "Other"];
    const [bookingResult, setBookingResult] = useState({
        success: null,
        submitted: false,
    });
    const [isInputValid, setIsInputValid] = useState({
        resDate: true,
        resTime: true,
        guests: true,
        occasion: true,
    });

    const submitForm = async (e) => {
        e.preventDefault();
        const success = await submitAPI(formState);
        console.dir(formState);
        setBookingResult({ success: success, submitted: true });
    };

    const resetForm = () => {
        setBookingResult({ success: null, submitted: false });
        setFormState({
            resDate: "",
            guests: "",
            occasion: "",
            resTime: "",
        });
        setIsInputValid({
            resDate: false,
            resTime: false,
            guests: true,
            occasion: true,
        });
    };

    const updateInput = (e) => {
        checkValidity(e);
        setFormState((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const checkValidity = (e) => {
        const { id, value: val } = e.target;
        let isValid = true;
        switch (id) {
            case "resDate":
                const parsedDate = new Date(val);
                isValid = parsedDate instanceof Date;
                break;
            case "resTime":
                isValid = times.includes(val);
                break;
            case "guests":
                isValid = +val > 0 && +val <= 11;
                break;
            case "occasion":
                break;
            default:
                console.log("unknown input");
        }
        console.log(id, val, isValid);
        setIsInputValid((prev) => ({ ...prev, [id]: isValid }));
    };

    const confirmationMessage = bookingResult.success
        ? {
              h4: "Success",
              message: `Booking confirmed on ${formState.resDate} at
        ${formState.resTime} for ${formState.guests} guest(s)`,
              cta: "Make another reservation",
          }
        : {
              h4: "Oops, something went wrong",
              message: "Please try again in a few minutes.",
              cta: "Retry",
          };

    return bookingResult.submitted ? (
        <section className={classes.confirmation} data-testid="confirmation">
            <h4>{confirmationMessage.h4}</h4>
            <p>{confirmationMessage.message}</p>
            <CallToAction onClick={resetForm}>
                {confirmationMessage.cta}
            </CallToAction>
        </section>
    ) : (
        <form className={classes.form}>
            <label htmlFor="resDate">Choose date</label>
            <input
                type="date"
                id="resDate"
                value={formState.resDate}
                data-testid="select-date"
                onChange={updateInput}
                aria-label="Enter the booking date"
                aria-required="true"
            />
            <label htmlFor="resTime">Choose time</label>
            <select
                id="resTime"
                onChange={updateInput}
                value={formState.resTime}
                data-testid="select-time"
                aria-label="Enter the booking time"
                aria-required="true">
                {times?.length > 0 ? (
                    times.map((time, idx) => (
                        <option data-testid="time-option" key={idx}>
                            {time}
                        </option>
                    ))
                ) : (
                    <option>No slots available for this date</option>
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                data-testid="select-guests"
                value={formState.guests}
                onChange={updateInput}
                aria-label="Enter the number of guests"
                aria-required="true"
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formState.occasion}
                onChange={updateInput}
                data-testid="select-occasion"
                aria-label="Enter occasion"
                aria-required="true">
                {occasions.map((occ) => (
                    <option key={occ}>{occ}</option>
                ))}
            </select>
            <CallToAction
                type="submit"
                onClick={submitForm}
                disabled={
                    !Object.values(isInputValid).every((isValid) => isValid)
                }>
                Make your reservation
            </CallToAction>
        </form>
    );
};
export default BookingForm;
