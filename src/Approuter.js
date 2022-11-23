import React from "react";
import App from "./App";
import Signin from "./components/Signin";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

const Approuter = () => {
    return(
        <Routes>
            <Route path="/"><App/></Route>
            <Route path="/signin"><Signin/></Route>
            <Route path="/register"><Register/></Route>
        </Routes>
    )
}

export default Approuter