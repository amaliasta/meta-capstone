import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import classes from "./App.module.css";

function App() {
    return (
        <div className={classes.app}>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
