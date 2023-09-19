import React, { useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, initializeLocalStorage } from "../../api/mock-api";

const updateTimes = (prev, action) => {
    if (action.type === "UPDATE_TIMES") {
        return {
            ...prev,
            availableTimes: action.times,
        };
    } else if (action.type === "UPDATE_FIELD") {
        return { ...prev, [action.id]: action.value };
    } else {
        return "Unknown action type";
    }
};

const Main = () => {
    const occasions = ["Anniversary", "Birthday", "Other"];
    const initState = {
        resDate: new Date().toISOString().split("T")[0],
        resTime: "17",
        guests: 1,
        occasion: occasions[0],
        availableTimes: []
    };

    const [formState, dispatchFormState] = useReducer(
        updateTimes,
        initState,
    );

    const { resDate } = formState;

    useEffect(() => {
        initializeLocalStorage();
    }, []);

    useEffect(() => {
        async function fetchAvailableTimes() {
            const availableTimes = await fetchAPI(resDate);
            dispatchFormState({ type: "UPDATE_TIMES", times: availableTimes });
        }
        fetchAvailableTimes();
    }, [resDate]);

    return (
        <BookingForm
            formState={formState}
            dispatchFormState={dispatchFormState}
            occasions={occasions}
        />
    );
};

export default Main;
