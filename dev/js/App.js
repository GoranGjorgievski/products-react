import React, { Component } from 'react';
import {connect} from "react-redux";
import Header from "./components/app/Header";
import Body from "./components/app/Body";
import Footer from "./components/app/Footer";


import '../css/App.css';



export default class App extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid" id="root-container">
                    <Header />
                    <Body />
                </div>
                <Footer />
                <br />
            </div>
        );
    }


}

