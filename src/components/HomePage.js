import React from "react";
import Main from "./HomePage/Main";
import Footer from "./HomePage/Footer";
import Specials from "./HomePage/Specials";
import About from "./HomePage/About";
import Testimonials from "./HomePage/Testimonials";


const HomePage = () => {
    return (
        <>
            <Main></Main>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <About />
            <Footer></Footer>
        </>
    );
};

export default HomePage;
