import HomePage from "./components/HomePage";
import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/MenuPage/Menu";
import classes from "./App.module.css";
import BookingForm from "./components/BookingPage/BookingForm";
import Header from "./components/HomePage/Header";

function App() {
    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];

    const occasions = ["Anniversary", "Birthday", "Other"];

    const [reservationInfo, setReservationInfo] = useState({
        "res-date": "",
        "res-time": availableTimes[0],
        guests: 1,
        occasion: occasions[2],
    });

    return (
        <div className={classes.page}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route
                        path="/booking"
                        element={
                            <BookingForm
                                bookingInfo={reservationInfo}
                                setBookingInfo={setReservationInfo}
                                times={availableTimes}
                                occasions={occasions}
                            />
                        }></Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
