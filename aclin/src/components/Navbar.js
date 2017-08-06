import React, { Component } from "react";
import ProfilePicDesktop from "../images/Allan.jpg";
import ProfilePicMobile from "../images/Allan_mobile.jpg";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false
        };
    }

    openNavMenu = () => {
        // let navMenu = document.getElementById("nav-menu");
        // if (navMenu.style.display !== "block") {
        //     navMenu.style.display = "block";
        // } else {
        //     navMenu.style.display = "none";
        // }
        this.setState({
            navOpen: !this.state.navOpen
        });
    }

    render = () => {
        return (
            <div className="navbar">
                <section className="desktop">
                    <h1>Allan Lin</h1>
                    <div className="profile-pic">
                        <img src={ProfilePicDesktop} alt="Allan_profile_picture" />
                    </div>
                    <div className="links">
                        <ul>
                            <li className="nav-link"><a href="#skills">Skills</a></li>
                            <li className="nav-link"><a href="#experience">Experience</a></li>
                            <li className="nav-link"><a href="#other">Links</a></li>
                        </ul>
                    </div>
                </section>
                <section className="mobile">
                    <div className="top-bar">
                        <h1>Allan Lin</h1>
                        <button id="drop-down-btn" onClick={this.openNavMenu}>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    { this.state.navOpen && <div id="nav-menu" >
                        <div className="profile-pic-box">
                            <img className="profile-pic" src={ProfilePicMobile} alt="Allan_profile_picture_mobile" />
                        </div>
                        <ul>
                            <li className="nav-link"><a href="#skills">Skills</a></li>
                            <li className="nav-link"><a href="#experience">Experience</a></li>
                            <li className="nav-link"><a href="#other">Links</a></li>
                        </ul>
                    </div> }
                </section>
            </div>
        );
    };
}
