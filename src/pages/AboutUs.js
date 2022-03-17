import "../css/AboutUs.css"
import React from "react";
// import Revenant from "../assets/revenant.png"
// import nomina_dekstop from "../assets/nomina.png"
// import nomina_mob from "../assets/nomina-mob.png"
// import component from "../assets/component-about.png"
const AboutUs = () =>{
    return (
        <div>
            <section id="about">

                <div>
                    <img className="desk-size" src="images/nomina.png" alt=""/>

                    <img className="mob-size" src="images/nomina-mob.png" alt=""/>
                </div>

                <div className="row padding-space">
                    <div className="col-md-1 order-2 order-md-1  adjust-center-about">
                        <img src="images/component-about.png" alt=""/>
                    </div>

                    <div className="col-md-11 order-1 order-md-2 adjust-center-about">
                        <div className="create-games-desc-text">
                            <span >
                                Creating games for the love of games. We aim to create world-class quality games that brings fun to the table and strive to bring in the best and brightest in the country.
                            </span>
                        </div>
                    </div>   
                </div>

                <div className="milestone-content-wrap">
                    <div className="title-desc-wrap">
                        <h3 className="heading-size">MILESTONE</h3>
                        <span>In 2020 we created a game called The Revenant Prince. Its the first game we’ve ever made and also available to play as demo and available to purchase on Steam.</span>
                    </div>
                </div>
                
                <div>
                    <img src="images/revenant.png" alt=""/>
                </div>
            </section>
        </div>
    );
}

export default AboutUs