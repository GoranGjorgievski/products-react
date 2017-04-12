import React, { Component } from 'react';
import {connect} from "react-redux";

export default class Footer extends Component{
    render(){

        return (
         <footer className="navbar navbar-fixed-bottom text-center footer">
             Copyright @ Goran Gjorgievski, Scopic Software
         </footer>
        );
    }
}