// import ekLogo from "../assets/ek-logo.png"
import "../css/Home.css"
import React from "react";
const Home=()=>{
    return(
        
        <div >
            <section className="bg-home" id="home">
                    <div>
                        <div className="home-content">
                            <div>
                                <span className="title-container">CHALLENGE THE DREAD</span>
                            </div>
                            <div>
                                <span className="subtitle-container">Evermore Knights Pre-Alpha demo is now playable!</span>
                            </div>
                            <div className="a-container">
                                <a className="a-wrap-link" href="https://evermoreknights.com/play" target="_blank">PLAY DEMO</a>
                            </div>
                            <div>
                                <img src="images/ek-logo.png" alt=""/>
                            </div>
                        </div>

                    </div>   
            </section>
        </div>
       
    );

}

export default Home