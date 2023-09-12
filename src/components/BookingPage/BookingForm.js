import React, { useState } from "react";
import classes from "./BookingForm.module.css";
import CallToAction from "../UI/CallToAction";
import { submitAPI } from "../../api/mock-api";

import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

const maxDate = new Date();
maxDate.setDate(today.getDate() + 4);
maxDate.setHours(23, 59, 59, 999);

const validationSchema = Yup.object({
    resDate: Yup.date()
        .min(today, "date can't be before today")
        .max(maxDate, "reservations can only be made 5 days before")
        .required("Date is required"),
    resTime: Yup.string().required("Time is required"),
    guests: Yup.number()
        .min(1, "At least one guest is required")
        .max(10, "Maximum ten guests"),
    occassion: Yup.string().required("Please specify the occasion"),
});

const BookingForm = (props) => {
    const { formState, setFormState, times } = props;

    const occasions = ["Anniversary", "Birthday", "Other"];
    const [bookingResult, setBookingResult] = useState({
        success: null,
        submitted: false,
    });
    // const [isInputValid, setIsInputValid] = useState({
    //     resDate: null,
    //     resTime: null,
    //     guests: null,
    //     occasion: null,
    // });

    const submitForm = async (e) => {
        e.preventDefault();
        const success = await submitAPI(formState);
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
        // setIsInputValid({
        //     resDate: false,
        //     resTime: false,
        //     guests: true,
        //     occasion: true,
        // });
    };

    const initialValues = { ...formState };

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
        <>
         <h4 className={classes.title}>Booking form</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}>
                <form className={classes.form}>
                    <label htmlFor="resDate">
                        Choose date (only today and next four days)
                    </label>
                    <Field
                        type="date"
                        id="resDate"
                        name="resDate"
                        data-testid="select-date"
                        aria-label="Enter the booking date"
                        aria-required="true"
                    />
                    <ErrorMessage
                        name="resDate"
                        component="div"
                        className={classes.error}
                    />
                    <label htmlFor="resTime">Choose time</label>
                    <Field
                        as="select"
                        id="resTime"
                        name="resTime"
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
                    </Field>
                    <ErrorMessage
                        name="resTime"
                        component="div"
                        className={classes.error}
                    />
                    <label htmlFor="guests">Number of guests</label>
                    <Field
                        name="guests"
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        data-testid="select-guests"
                        aria-label="Enter the number of guests"
                        aria-required="true"
                    />
                    <ErrorMessage
                        name="guests"
                        component="div"
                        className={classes.error}
                    />
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        data-testid="select-occasion"
                        aria-label="Enter occasion"
                        aria-required="true">
                        {occasions.map((occ) => (
                            <option key={occ}>{occ}</option>
                        ))}
                    </select>
                    <ErrorMessage
                        name="occasion"
                        component="div"
                        className={classes.error}
                    />
                    <CallToAction type="submit" onClick={submitForm}>
                        Make your reservation
                    </CallToAction>
                </form>
            </Formik>
        </>
    );
};
export default BookingForm;
