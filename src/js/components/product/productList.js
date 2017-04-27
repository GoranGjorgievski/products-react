import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import Product from './product';

import Modal from 'react-modal';

import EditModal from '../modalContents/editModal';
import DeleteModal from '../modalContents/deleteModal';




import {
   showAddModal,
   addProduct,
   selectStateProduct,
   closeModal,
   showEditModal,
   editProduct,
   showDeleteModal,
   removeArrayProduct,
   deselectProduct,
} from '../../actions/index';

class ProductList extends React.Component {

    /**
     * Delete button for confirm delete modal
     * @returns {XML}
     * @private
     */
    _deleteButton(){
        return (
            <button className='btn btn-success' onClick={() => {this.confirmDelete(this.props.selectedProduct);  this.closeModal()}}>Delete</button>
        );
    }

    /**
     * Edit button visible in add new product and edit product modals
     * @returns {XML}
     * @private
     */

    _editButton(){
            return (
                <button className='btn btn-success' onClick={() => {this.saveProduct(); this.closeModal(); }}>Save</button>
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
                 isOpen={this.props.editModal || this.props.deleteModal || this.props.addModal}
                 contentLabel="Modal"
                 className='popup'
                 overlayClassName='popup-overlay'
             >
             <div className="text-center">
                {(this.props.editModal || this.props.addModal) ? <EditModal selectedProduct={this.props.selectedProduct} /> : null}
                {this.props.deleteModal ? <DeleteModal selectedProduct={this.props.selectedProduct} /> : null}
                <button className='btn btn-danger' onClick={() => this.closeModal()}>Close</button>
                {(this.props.editModal || this.props.addModal) ? this._editButton(): null}
                {this.props.deleteModal ? this._deleteButton(): null}
             </div>
             </Modal>
         </span>
        );
    }

     /**
     * Closes modal on cancel click
     */
    closeModal() {
        this.props.closeModal();
        this.props.deselectProduct();
    }

     /**
     * Selects product in state and shows confirm delete modal
     * @param product (Object)
     */
    deleteProduct(product){
        this.props.selectStateProduct(product);
        this.props.showDeleteModal();
    }

     /**
     * Dispatches delete product from state array
     * @param product (Object)
     */
    confirmDelete(product){
         this.props.removeArrayProduct(product);
    }

     /**
     * Selects product in state and shows edit modal
     * @param product
     */
    editProduct(product){
        this.props.selectStateProduct(product);
        this.props.showEditModal();
    }

     /**
     * Returns the MAX id from the products
     * @returns {number}
     */
    getMaxId(){
      let maxId=-1;

      this.props.products.map(function(obj){
         if(obj.id>maxId) maxId=obj.id;
      });

      return maxId;
    }

     /**
     * Edits or adds a new product.
     If selected product is -1 a new product is being added, otherwise  it edits the already existing one
     uses props.selectedProduct
     */
    saveProduct(){

        let name= document.getElementById('name').value;
        let description = document.getElementById('description').value;
        let price = document.getElementById('price').value;
        let created_on = document.getElementById('created_on').value;

        //Edit product
        if(this.props.selectedProduct.id!=-1){
            let editProduct = new Product(this.props.selectedProduct.id,name,description,price,created_on);
            this.props.editProduct(editProduct);
        }
        //New product
        else{
            let maxId= this.getMaxId()+1;
            if(maxId==0)
                return;

            let newProduct= new Product(maxId,name,description,price,created_on);
            if(newProduct.name!='')
             this.props.addProduct(newProduct);
        }
    }

    /**
     * Stores selected product in state
     * @param product (Object)
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