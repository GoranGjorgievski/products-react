import {
    SHOW_DETAILS_MODAL,
    SHOW_EDIT_MODAL,
    SHOW_DELETE_MODAL,
    SELECT_PRODUCT,
    CLOSE_MODAL,
} from './names';

export const showDetailsModal= ()=>{
    return {
        type: SHOW_DETAILS_MODAL,
    };
};

export const showEditModal= ()=>{
    return {
        type: SHOW_EDIT_MODAL,
    };
};

export const showDeleteModal= ()=>{
    return {
        type: SHOW_DELETE_MODAL,
    };
};

export const selectStateProduct = (product)=>{
    return {
        type: SELECT_PRODUCT,
        payload: product

    };
};

export const closeModal = () =>{
    return {
        type: CLOSE_MODAL,
    }
}