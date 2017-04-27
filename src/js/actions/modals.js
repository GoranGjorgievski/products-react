import {
    SHOW_ADD_MODAL,
    SHOW_DETAILS_MODAL,
    SHOW_EDIT_MODAL,
    SHOW_DELETE_MODAL,
    CLOSE_MODAL,
} from './names';


export const showAddModal = () => {
    return {
        type: SHOW_ADD_MODAL,
    }
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



export const closeModal = () =>{
    return {
        type: CLOSE_MODAL,
    }
};

