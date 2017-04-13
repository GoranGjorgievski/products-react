import {
  SHOW_DETAILS_MODAL,
  SELECT_PRODUCT,
  CLOSE_MODAL,
  SHOW_EDIT_MODAL,
  SHOW_DELETE_MODAL,
} from '../actions/names';


let INITIAL_STATE= {
   products: [
       {
           id: 1,
           price: 100,
           name: "Chair",
           description: "This is a very good chair",
           creation_date: '04/13/2017'
       },
       {
           id: 2,
           price: 1001,
           name: "Table",
           description: "This is a very good table",
           creation_date: '04/05/2017'
       },
       {
           id: 3,
           price: 5000,
           name: "Bike",
           description: "The bike is very fast",
           creation_date: '04/01/2017'
       },
       {
           id: 4,
           price: 29999,
           name: "TV",
           description: "100'' 4k Full-HD, 4Mhz,...",
           creation_date: '04/13/2017'
       },

   ],
    selectedProduct: {
        id: -1,
        price: 0,
        name: '',
        description: '',
        creation_date: '',
    },
    detailsModal: false,
    deleteModal: false,
    editModal: false,
};
export default (state=INITIAL_STATE, action) =>{
    switch (action.type) {

        case SHOW_DETAILS_MODAL:
            return {
                ...state,
                detailsModal: true,
            }
            break;

        case SHOW_EDIT_MODAL:
            return {
                ...state,
                editModal: true,
            }
            break;

        case SHOW_DELETE_MODAL:
            return {
                ...state,
                deleteModal: true,
            }
            break;

        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            }
            break;

        case CLOSE_MODAL:
            return {
                ...state,
                detailsModal: false,
                deleteModal: false,
                editModal: false,
                selectedProduct: {
                    id: -1,
                    price: 0,
                    name: '',
                    description: '',
                    creation_date: '',
                }
            }
            break;
        
        default:
            return state;
    }
};