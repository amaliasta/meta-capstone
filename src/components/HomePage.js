import React from "react";
import Header from "./HomePage/Header";
import Main from "./HomePage/Main";
import Footer from "./HomePage/Footer";
import Specials from "./HomePage/Specials";
import About from "./HomePage/About";
import Testimonials from "./HomePage/Testimonials";
import classes from "./HomePage.module.css";


const HomePage = () => {
    return (
        <div className={classes.app}>
            <Header></Header>
            <Main></Main>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <About />
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
