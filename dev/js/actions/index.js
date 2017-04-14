import {
    SHOW_ADD_MODAL,
    ADD_PRODUCT,
    SHOW_DETAILS_MODAL,
    SHOW_EDIT_MODAL,
    EDIT_PRODUCT,
    SHOW_DELETE_MODAL,
    REMOVE_ARRAY_PRODUCT,
    SELECT_PRODUCT,
    CLOSE_MODAL,
} from './names';

export const showAddModal = () => {
    return {
        type: SHOW_ADD_MODAL,
    }
};

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: {...product}
    }
};

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

export const editProduct= (product)=>{
    return {
        type: EDIT_PRODUCT,
        payload: {...product}
    }
};

export const showDeleteModal= ()=>{
    return {
        type: SHOW_DELETE_MODAL,
    };
};

export const removeArrayProduct = (product) =>{
    return {
        type: REMOVE_ARRAY_PRODUCT,
        payload: {...product}
    };
};

export const selectStateProduct = (product)=>{
    return {
        type: SELECT_PRODUCT,
        payload: {...product}

    };
};

export const closeModal = () =>{
    return {
        type: CLOSE_MODAL,
    }
}