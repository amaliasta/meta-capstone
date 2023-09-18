import React, { useState } from "react";
import classes from "./LoginForm.module.css";
import CallToAction from "../UI/CallToAction";

import { ErrorMessage, Formik, Field, Form } from "formik";

const LoginForm = () => {
    const [bookingResult, setBookingResult] = useState({
        success: null,
        submitted: false,
    });

    return (
        <section className={classes.form}>
            <h2>Login</h2>
            <Formik>
                {({ isSubmitting, isValid, dirty, value, changeHandler }) => (
                    <Form className={classes.form}>
                        <label htmlFor="user">Username</label>
                        <Field
                            type="input"
                            id="user"
                            value={value}
                            onChange={changeHandler}
                            name="user"
                            aria-label="Enter your username"
                            aria-required="true"></Field>
                        <ErrorMessage
                            name="user"
                            component="div"
                            className={classes.error}
                        />
                        <label htmlFor="pass">Password</label>
                        <Field
                            type="password"
                            name="pass"
                            id="pass"
                            value={value}
                            onChange={changeHandler}
                            aria-label="Enter your password"
                            aria-required="true"
                        />
                        <ErrorMessage
                            name="pass"
                            component="div"
                            className={classes.error}
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
export default LoginForm;
