import {
    SHOW_ADD_MODAL,
    CLOSE_MODAL,
    SHOW_EDIT_MODAL,
    SHOW_DELETE_MODAL,
} from '../actions/names';


let INITIAL_STATE= {
    addModal: false,
    deleteModal: false,
    editModal: false,
};

export default (state=INITIAL_STATE, action) =>{
    switch (action.type) {

        case SHOW_ADD_MODAL:
            return {
                ...state,
                addModal: true,
            };


        case SHOW_EDIT_MODAL:
            return {
                ...state,
                editModal: true,
            };

        case SHOW_DELETE_MODAL:
            return {
                ...state,
                deleteModal: true,
            };

        case CLOSE_MODAL:
            return {
                ...state,
                addModal: false,
                detailsModal: false,
                deleteModal: false,
                editModal: false,
            };

        default:
            return state;

    }
};