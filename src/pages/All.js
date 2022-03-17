import AboutUs from "./AboutUs"
import Home from "./Home"
import OurProducts from "./OurProducts"
import React from "react";

const { Fragment } = require("react")

const All = () =>{
    return (
        <Fragment>
            <Home/>
            <OurProducts/>
            <AboutUs/>
        </Fragment>
    );
}

export default All