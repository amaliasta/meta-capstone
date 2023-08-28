import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Specials";

import classes from "./App.module.css";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className={classes.app}>
            <Header></Header>
            <Main></Main>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
}

export default App;
