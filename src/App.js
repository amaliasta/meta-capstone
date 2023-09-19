import HomePage from "./components/HomePage";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/MenuPage/Menu";
import Main from "./components/BookingPage/Booking";
import Header from "./components/HomePage/Header";
import About from "./components/HomePage/About";
import Login from "./components/LoginPage/LoginForm";
import Footer from "./components/HomePage/Footer";
import OrderOnline from "./components/HomePage/OrderOnline";
function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const isMobile = screenWidth < 700;
    const [isOpen, setIsOpen] = useState(false);



    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const invisible = {display: "none"}
    return (
        <BrowserRouter>
            <Header isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div style={isMobile && isOpen ? invisible : {}}>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/booking" element={<Main />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/order" element={<OrderOnline />}></Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
