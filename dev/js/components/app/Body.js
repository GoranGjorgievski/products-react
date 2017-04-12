import React, { Component } from 'react';
import {connect} from "react-redux";

export default class Body extends Component{
    render(){
        return (
        <div className="product-list">
            <div className="container card col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default  panel--styled">
                            <div className="panel-body">
                                <div className="col-md-12 panelTop">
                                    <div className="col-md-4">
                                        <img className="img-responsive" src="http://placehold.it/350x350" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2>Product Name</h2>
                                        <p>Lorem ipsum dolor sit amet, altera propriae iudicabit eos ne. Vel ut accusam tacimates, prima oratio ius ea. Et duo alii verterem principes, te quo putent melius fabulas, ei scripta eligendi appareat duo.</p>
                                    </div>
                                </div>

                                <div className="col-md-12 panelBottom">
                                    <div className="col-md-4 text-center">
                                        <button className="btn btn-info"><span className="glyphicon glyphicon-info-sign"></span>  Details </button>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <button className="btn btn-warning"><span className="glyphicon glyphicon-edit"></span>   Edit</button>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <button className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span>   Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container card col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default  panel--styled">
                            <div className="panel-body">
                                <div className="col-md-12 panelTop">
                                    <div className="col-md-4">
                                        <img className="img-responsive" src="http://placehold.it/350x350" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2>Product Name</h2>
                                        <p>Lorem ipsum dolor sit amet, altera propriae iudicabit eos ne. Vel ut accusam tacimates, prima oratio ius ea. Et duo alii verterem principes, te quo putent melius fabulas, ei scripta eligendi appareat duo.</p>
                                    </div>
                                </div>

                                <div className="col-md-12 panelBottom">
                                    <div className="col-md-4 text-center">
                                        <button className="btn btn-info"><span className="glyphicon glyphicon-info-sign"></span>  Details </button>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <button className="btn btn-warning"><span className="glyphicon glyphicon-edit"></span>   Edit</button>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <button className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span>   Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}