import React from 'react'
import { Link } from  'react-router';


export default class Product extends React.Component{

    /**
     * @param id (number)
     * @param name (string)
     * @param description (string)
     * @param price (number)
     * @param creation_date (string)
     */
    constructor(id,name,description,price,creation_date){
        super();
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.creation_date=creation_date;
    }

    render(){
        return (
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
                                        <h2>{this.props.product.name}</h2>
                                        <p>{this.props.product.description}</p>
                                    </div>
                                </div>

                                <div className="col-md-12 panelBottom">
                                    <div className="col-md-4 text-center">
                                        <Link className="btn btn-info" to={`/p/${this.props.product.id}`}><span className="glyphicon glyphicon-info-sign"></span>  View Details </Link>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <button onClick={this.props.editProduct.bind(this,this.props.product)} className="btn btn-warning"><span className="glyphicon glyphicon-edit"></span>   Edit</button>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <button onClick={this.props.deleteProduct.bind(this,this.props.product)} className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span>   Delete</button>
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