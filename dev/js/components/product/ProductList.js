import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';

import Modal from 'react-modal';

import {
   showDetailsModal,
   selectStateProduct,
   closeModal,
   showEditModal,
   showDeleteModal,
} from '../../actions';

class ProductList extends React.Component {

    _detailsModal() {
        return (
            <span>
                <h1 className="padding-15 text-capitalize text-warning">Details</h1>
                <p className="padding-15"><b className=" pull-left">Name:</b> <i className="pull-right">{this.props.selectedProduct.name}</i></p>
                <p className="padding-15"><b className=" pull-left">Description:</b> <i className="pull-right">{this.props.selectedProduct.description}</i></p>
                <p className="padding-15"><b className=" pull-left">Price:</b> <i className="pull-right">{this.props.selectedProduct.price}</i></p>
                <p className="padding-15"><b className=" pull-left">Added on:</b> <i className="pull-right">{this.props.selectedProduct.creation_date}</i></p>
            </span>
        );
    }

    _editModal(){
        return (
            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    <th className="text-right">
                        Property
                    </th>
                    <th className="text-center">
                        Value
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="text-right">
                        Name
                    </td>
                    <td>
                        <input className="form-control" type="text" defaultValue={this.props.selectedProduct.name} />
                    </td>
                </tr>
                <tr>
                    <td className="text-right">
                        Description
                    </td>
                    <td>
                        <input className="form-control" type="text" defaultValue={this.props.selectedProduct.description} />
                    </td>
                </tr>
                <tr>
                    <td className="text-right">
                        Price
                    </td>
                    <td>
                        <input className="form-control" type="number" defaultValue={this.props.selectedProduct.price} />
                    </td>
                </tr>
                <tr>
                    <td className="text-right">
                        Created on
                    </td>
                    <td>
                        <input className="form-control" readOnly type="text" defaultValue={this.props.selectedProduct.creation_date} />
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }

    _deleteModal(){
        return (
            <h3>Please confirm to delete this product</h3>
        );
    }

    _confirmButton(){
        return (
            <button className='btn btn-success' onClick={() => this.closeModal()}>Confirm</button>
        );
    }

    render(){
        return(
         <span>
             {this.props.products.map((product) =>
                 <Product key={product.id}
                          editProduct={(product) => this.editProduct(product)}
                          selectProduct={(product) => this.selectProduct(product)}
                          deleteProduct={(product) =>this.deleteProduct(product)}
                          product={product} />
             )}

             <Modal
                 isOpen={this.props.detailsModal || this.props.editModal || this.props.deleteModal}
                 contentLabel="Modal"
                 className='popup'
                 overlayClassName='popup-overlay'
             >
             <div className="text-center">
                {this.props.detailsModal ? this._detailsModal() : null}
                {this.props.editModal ? this._editModal(): null}
                {this.props.deleteModal ? this._deleteModal(): null}
                <button className='btn btn-danger' onClick={() => this.closeModal()}>Close</button>
                {this.props.deleteModal || this.props.editModal ? this._confirmButton(): null}
             </div>
             </Modal>
         </span>
        );
    }

    closeModal() {
        this.props.closeModal();
    }

    deleteProduct(product){
        this.props.selectStateProduct(product);
        this.props.showDeleteModal();
    }
    editProduct(product){
        this.props.selectStateProduct(product);
        this.props.showEditModal();
    }
    selectProduct(product) {
        this.props.selectStateProduct(product);
        this.props.showDetailsModal();

    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        selectedProduct: state.selectedProduct,
        detailsModal: state.detailsModal,
        deleteModal: state.deleteModal,
        editModal: state.editModal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showDetailsModal: () => {
            dispatch(showDetailsModal());
        },
        showEditModal: () => {
            dispatch(showEditModal());
        },
        showDeleteModal: () => {
            dispatch(showDeleteModal());
        },
        selectStateProduct: (product) => {
            dispatch(selectStateProduct(product));
        },
        closeModal: () => {
            dispatch(closeModal());
        },

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);