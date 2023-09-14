import HomePage from "./components/HomePage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/MenuPage/Menu";
import classes from "./App.module.css";
import Main from "./components/BookingPage/Main";
import Header from "./components/HomePage/Header";
import About from "./components/HomePage/About";

function App() {
    return (
        <div className={classes.page}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route path="/booking" element={<Main />}></Route>
                    <Route path="/login" element={<></>}></Route>
                    <Route path="/order" element={<></>}></Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
