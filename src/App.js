import React from "react";
import Home from "./pages/Home/Home";
import styles from "./App.scss";
import Header from "./components/Header/Header";
const App = () =>{
    return (
        <div className={[styles['*'], styles['body']].join(' ')}>
            <Home/>
        </div>
    )
}

export default App;