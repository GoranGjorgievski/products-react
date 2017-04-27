import React from 'react'
import {connect} from 'react-redux';

class ProductDetails extends React.Component{


    render(){
        return (
            <span className="col-md-6 text-center">
                <h1 className="padding-15 text-capitalize text-warning text-center">Details</h1>
                <p className="padding-15"><b className=" pull-left">Name:</b> <i className="pull-right">{this.props.products.find(obj => obj.id == this.props.params.productId).name}</i></p>
                <p className="padding-15"><b className=" pull-left">Description:</b> <i className="pull-right">{this.props.products.find(obj => obj.id == this.props.params.productId).description}</i></p>
                <p className="padding-15"><b className=" pull-left">Price:</b> <i className="pull-right">{this.props.products.find(obj => obj.id == this.props.params.productId).price}</i></p>
                <p className="padding-15"><b className=" pull-left">Added on:</b> <i className="pull-right">{this.props.products.find(obj => obj.id == this.props.params.productId).creation_date}</i></p>
            </span>
        );
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.product.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails);