import HomePage from "./components/HomePage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/MenuPage/Menu";
import Main from "./components/BookingPage/Main";
import Header from "./components/HomePage/Header";
import About from "./components/HomePage/About";
import  Login from "./components/LoginPage/LoginForm"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/booking" element={<Main />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/order" element={<></>}></Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
