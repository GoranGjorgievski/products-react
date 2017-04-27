import React, { Component } from 'react';
import {connect} from "react-redux";
import Header from "./components/app/header";
import Body from "./components/app/body";
import Footer from "./components/app/footer";


import '../css/app.css';




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

