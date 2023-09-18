import React, { useState } from "react";
import classes from "./BookingForm.module.css";
import CallToAction from "../UI/CallToAction";
import { submitAPI } from "../../api/mock-api";

import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

const maxDate = new Date();
maxDate.setDate(today.getDate() + 4);
maxDate.setHours(23, 59, 59, 999);

const yupValidationSchema = Yup.object().shape({
    resDate: Yup.date()
        .min(today, "Date can't be before today")
        .max(maxDate, "Reservations can only be made for the next 5 days")
        .required("Date is required"),
    resTime: Yup.string().required("Time is required"),
    guests: Yup.number()
        .min(1, "At least one guest is required")
        .max(10, "Maximum ten guests"),
    occasion: Yup.string().required("Please specify the occasion"),
});

const BookingForm = ({ formState, occasions, dispatchFormState }) => {
    const [bookingResult, setBookingResult] = useState({
        success: null,
        submitted: false,
    });

    const customHandleChange = (e, setFieldValue) => {
        const { name, id, value } = e.target;
        dispatchFormState({
            type: "UPDATE_FIELD",
            id: id,
            value: value,
        });
        setFieldValue(name, value);
    };

    const submitForm = async (vals) => {
        const success = await submitAPI(vals);
        if (success) {
            setBookingResult({ success: success, submitted: true });
            dispatchFormState({
                type: "UPDATE_TIMES",
                times: formState.availableTimes.filter(
                    (time) => time !== vals.resTime
                ),
            });
        }
    };

    const confirmationMessage = bookingResult.success
        ? {
              h4: "Success",
              message: `Booking confirmed on ${formState.resDate} at
        ${formState.resTime} for ${formState.guests} ${
                  +formState.guests > 1 ? "guests" : "guest"
              }`,
              cta: "Make another reservation",
          }
        : {
              h4: "Oops, something went wrong",
              message: "Please try again in a few minutes.",
              cta: "Retry",
          };

    return bookingResult.submitted ? (
        <section className={classes.confirmation}>
            <h2 data-testid="confirmation">{confirmationMessage.h4}</h2>
            <p>{confirmationMessage.message}</p>
            <CallToAction
                onClick={() => {
                    setBookingResult({ success: null, submitted: false });
                }}>
                {confirmationMessage.cta}
            </CallToAction>
        </section>
    ) : (
        <section className={classes.form}>
            <h2>Booking form</h2>
            <Formik
                initialValues={formState}
                validationSchema={yupValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    submitForm(values);
                    setSubmitting(false);
                }}>
                {({ isSubmitting, isValid, dirty, setFieldValue }) => (
                    <Form className={classes.form} data-testid="form">
                        <label htmlFor="resDate">
                            Choose date (within 5-day range)
                        </label>
                        <Field
                            type="date"
                            id="resDate"
                            name="resDate"
                            onChange={(e) =>
                                customHandleChange(e, setFieldValue)
                            }
                            value={formState.resDate}
                            data-testid="select-date"
                            aria-label="Enter the booking date"
                            aria-required="true"
                        />
                        <ErrorMessage
                            data-testid="error"
                            name="resDate"
                            component="div"
                            className={classes.error}
                        />
                        <label htmlFor="resTime">Choose time</label>
                        <Field
                            as="select"
                            id="resTime"
                            name="resTime"
                            onChange={(e) =>
                                customHandleChange(e, setFieldValue)
                            }
                            value={formState.resTime}
                            data-testid="select-time"
                            aria-label="Enter the booking time"
                            aria-required="true">
                            {formState?.availableTimes?.length > 0 ? (
                                formState.availableTimes.map((time) => (
                                    <option
                                        data-testid="time-option"
                                        key={time}
                                        value={time}>
                                        {time}
                                    </option>
                                ))
                            ) : (
                                <option>
                                    No slots available for this date
                                </option>
                            )}
                        </Field>
                        <ErrorMessage
                            name="resTime"
                            component="div"
                            className={classes.error}
                            data-testid="error"
                        />
                        <label htmlFor="guests">Number of guests</label>
                        <Field
                            type="number"
                            name="guests"
                            onChange={(e) =>
                                customHandleChange(e, setFieldValue)
                            }
                            value={formState.guests}
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
                            data-testid="error"
                        />
                        <label htmlFor="occasion">Occasion</label>
                        <Field
                            as="select"
                            id="occasion"
                            name="occasion"
                            onChange={(e) =>
                                customHandleChange(e, setFieldValue)
                            }
                            value={formState.occasion}
                            data-testid="select-occasion"
                            aria-label="Enter occasion"
                            aria-required="true">
                            {occasions.map((occ) => (
                                <option key={occ} value={occ}>
                                    {occ}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage
                            name="occasion"
                            component="div"
                            className={classes.error}
                            data-testid="error"
                        />
                        <CallToAction
                            submit={true}
                            disabled={!dirty || !isValid || isSubmitting}>
                            Submit
                        </CallToAction>
                    </Form>
                )}
            </Formik>
        </section>
    );
};
export default BookingForm;
