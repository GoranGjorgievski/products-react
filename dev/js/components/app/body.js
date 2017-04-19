import React, { Component } from 'react';
import {connect} from "react-redux";

import ProductList from '../product/productList';

export default class Body extends React.Component{

    render(){
        return (
        <div className="product-list">
            <ProductList />
        </div>
        );
    }
}