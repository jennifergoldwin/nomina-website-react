// import Logo from "../assets/logo.png"
import "../css/Header.css"
import React from "react";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
const Header=()=>{
    return (
        <nav className="navbar fixed-top navbar-expand-lg custom-navbar">
        <a className="navbar-brand" href="/#">
            <div>
                <img src="images/logo.png" alt="Nomina" />
            </div>
        </a>
        <button className=" custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu">
            <span className="custom-toggler navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse " id="navmenu" >
            <ul className="navbar-nav ml-auto " id="top-menu">
                <li className="nav-item active">
                    <HashLink to='/#home' className="nav-link">Home</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink to='/#products' className="nav-link">Our Products</HashLink>
                    {/* <a className="nav-link" href="#">Our Products</a> */}
                </li>
                <li className="nav-item">
                    <HashLink to="/#about" className="nav-link">About Us</HashLink>
                    {/* <a className="nav-link" href="#">About Us</a> */}
                </li>
            </ul>
        </div>
    </nav>

    );
}
// Header.PropTypes = {};
export default Header