import {
    ADD_PRODUCT,
    EDIT_PRODUCT,
    REMOVE_ARRAY_PRODUCT,
    SELECT_PRODUCT,
    DESELECT_PRODUCT,
} from './names';

export const deselectProduct = () =>{
    return {
        type: DESELECT_PRODUCT,
    }
};

export const selectStateProduct = (product)=>{
    return {
        type: SELECT_PRODUCT,
        payload: {...product}

    };
};

export const removeArrayProduct = (product) =>{
    return {
        type: REMOVE_ARRAY_PRODUCT,
        payload: {...product}
    };
};

export const editProduct= (product)=>{
    return {
        type: EDIT_PRODUCT,
        payload: {...product}
    }
};

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: {...product}
    }
};