import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';

import Modal from 'react-modal';

import {
   showAddModal,
   addProduct,
   showDetailsModal,
   selectStateProduct,
   closeModal,
   showEditModal,
   editProduct,
   showDeleteModal,
   removeArrayProduct,
   deselectProduct,
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
                        <input ref="name" className="form-control" type="text" defaultValue={this.props.selectedProduct.name} />
                    </td>
                </tr>
                <tr>
                    <td className="text-right">
                        Description
                    </td>
                    <td>
                        <input ref="description" className="form-control" type="text" defaultValue={this.props.selectedProduct.description} />
                    </td>
                </tr>
                <tr>
                    <td className="text-right">
                        Price
                    </td>
                    <td>
                        <input ref="price" className="form-control" type="number" defaultValue={this.props.selectedProduct.price} />
                    </td>
                </tr>
                <tr>
                    <td className="text-right">
                        Created on
                    </td>
                    <td>
                        <input ref="created_on"
                               className="form-control"
                               readOnly
                               type="text"
                               defaultValue={this.props.selectedProduct.creation_date != '' ? this.props.selectedProduct.creation_date : new Date() } />
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

    _editButton(){
        return (
            <button className='btn btn-success' onClick={() => {this.saveProduct(); this.closeModal(); }}>Save</button>
        );
    }

    _deleteButton(){
        return (
            <button className='btn btn-success' onClick={() => {this.confirmDelete(this.props.selectedProduct);  this.closeModal()}}>Delete</button>
        );
    }

    render(){
        return(
         <span>
             <button className="btn btn-success btn-add" onClick={() => {this.props.showAddModal();}} ><span className="glyphicon glyphicon-plus"></span> Add Product</button>
             <br />
             <br />
             {this.props.products.map((product) =>
                 <Product key={product.id}
                          editProduct={(product) => this.editProduct(product)}
                          selectProduct={(product) => this.selectProduct(product)}
                          deleteProduct={(product) =>this.deleteProduct(product)}
                          product={product} />
             )}

             <Modal
                 isOpen={this.props.detailsModal || this.props.editModal || this.props.deleteModal || this.props.addModal}
                 contentLabel="Modal"
                 className='popup'
                 overlayClassName='popup-overlay'
             >
             <div className="text-center">
                {this.props.detailsModal ? this._detailsModal() : null}
                {(this.props.editModal || this.props.addModal) ? this._editModal(): null}
                {this.props.deleteModal ? this._deleteModal(): null}
                <button className='btn btn-danger' onClick={() => this.closeModal()}>Close</button>
                {(this.props.editModal || this.props.addModal) ? this._editButton(): null}
                {this.props.deleteModal ? this._deleteButton(): null}
             </div>
             </Modal>
         </span>
        );
    }

    /* close the modal on button click */
    closeModal() {
        this.props.closeModal();
        this.props.deselectProduct();
    }

    /* deleting a selected product
       param: selectedProduct from state / type: Product
     */
    deleteProduct(product){
        this.props.selectStateProduct(product);
        this.props.showDeleteModal();
    }

    confirmDelete(product){
         this.props.removeArrayProduct(product);
    }

    /* edit selected product
       param: selected product from state / type: Product
     */
    editProduct(product){
        this.props.selectStateProduct(product);
        this.props.showEditModal();
    }

    /* gives the MAX id from the products
       param: none
       return: integer
     */
    getMaxId(){
      let maxId=-1;

      this.props.products.map(function(obj){
         if(obj.id>maxId) maxId=obj.id;
      });

      return maxId;
    }

    /* edits or adds a new product
       if selected product is -1 a new product is being added, otherwise  it edits the already existing one
       uses props.selectedProduct
       param: none
     */
    saveProduct(){

        let name= this.refs.name.value;
        let description = this.refs.description.value;
        let price = this.refs.price.value;
        let created_on = this.refs.created_on.value;

        //edit product
        if(this.props.selectedProduct.id!=-1){
            let editProduct = new Product(this.props.selectedProduct.id,name,description,price,created_on);
            this.props.editProduct(editProduct);
        }
        //new product
        else{
            let maxId= this.getMaxId()+1;
            if(maxId==0)
                return;

            let newProduct= new Product(maxId,name,description,price,created_on);
            if(newProduct.name!='')
             this.props.addProduct(newProduct);
        }
    }

    /* sets selected product in state
       param: clicked product / type: Product
     */
    selectProduct(product) {
        this.props.selectStateProduct(product);
        this.props.showDetailsModal();

    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        selectedProduct: state.product.selectedProduct,
        addModal: state.modals.addModal,
        detailsModal: state.modals.detailsModal,
        deleteModal: state.modals.deleteModal,
        editModal: state.modals.editModal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showAddModal: () => {
            dispatch(showAddModal());
        },
        addProduct: (product) => {
            dispatch(addProduct(product));
        },
        showDetailsModal: () => {
            dispatch(showDetailsModal());
        },
        showEditModal: () => {
            dispatch(showEditModal());
        },
        editProduct: (product) => {
            dispatch(editProduct(product));
        },
        showDeleteModal: () => {
            dispatch(showDeleteModal());
        },
        removeArrayProduct: (product) =>{
            dispatch(removeArrayProduct(product));
        },
        selectStateProduct: (product) => {
            dispatch(selectStateProduct(product));
        },
        deselectProduct: () => {
            dispatch(deselectProduct());
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