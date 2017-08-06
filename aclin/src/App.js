import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/styles.css';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <div id="home" className="container">
                    <Navbar />
                    <Content />
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
