import React, { useEffect, useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, initializeLocalStorage } from "../../api/mock-api";

const updateTimes = (prev, action) => {
    if (action.type === "UPDATE_TIMES") {
        return action.times;
    } else {
        return "Unknown action type";
    }
};

const Main = () => {
    const [formState, setFormState] = useState({
        resDate: new Date().toISOString().split("T")[0],
        guests: "",
        occasion: "",
        resTime: "",
    });

    const { resDate } = formState;

    useEffect(()=> {
        initializeLocalStorage();
    }, [])

    useEffect(() => {
        async function fetchData() {
            const data = await fetchAPI(resDate);
            dispatchAvailableTimes({ type: "UPDATE_TIMES", times: data });
        }
        fetchData();
    }, [resDate]);


    const initializeTimes = async () => {
        const times = await fetchAPI(resDate);
        return times;
    };

    const [availableTimes, dispatchAvailableTimes] = useReducer(
        updateTimes,
        undefined,
        initializeTimes
    );

    return (
        <BookingForm
            formState={formState}
            setFormState={setFormState}
            times={availableTimes}
            setTimes={dispatchAvailableTimes}
        />
    );
};

export default Main;
