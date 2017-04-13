import React, { Component } from 'react';
import {connect} from "react-redux";

import ProductList from './../product/ProductList';

export default class Body extends React.Component{
    render(){
        return (
        <div className="product-list">
            <ProductList />
        </div>
        );
    }
}