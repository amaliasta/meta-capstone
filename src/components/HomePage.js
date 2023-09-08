import React from "react";
import Hero from "./HomePage/Hero";
import Footer from "./HomePage/Footer";
import Specials from "./HomePage/Specials";
import About from "./HomePage/About";
import Testimonials from "./HomePage/Testimonials";


const HomePage = () => {
    return (
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
            <Footer />
        </>
    );
};

export default HomePage;
