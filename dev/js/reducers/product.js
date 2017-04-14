import {
    ADD_PRODUCT,
    SELECT_PRODUCT,
    EDIT_PRODUCT,
    REMOVE_ARRAY_PRODUCT,
    DESELECT_PRODUCT,
} from '../actions/names';

let INITIAL_STATE= {
    products: [
        {
            id: 1,
            price: 100,
            name: "Chair",
            description: "This is a very good chair",
            creation_date: 'Fri Apr 14 2017 10:31:42 GMT+0200 (Central European Daylight Time)'
        },
        {
            id: 2,
            price: 1001,
            name: "Table",
            description: "This is a very good table",
            creation_date: 'Thu Apr 13 2017 22:31:42 GMT+0200 (Central European Daylight Time)'
        },
        {
            id: 3,
            price: 5000,
            name: "Bike",
            description: "The bike is very fast",
            creation_date: 'Wed Apr 12 2017 11:31:42 GMT+0200 (Central European Daylight Time)'
        },
        {
            id: 4,
            price: 29999,
            name: "TV",
            description: "100'' 4k Full-HD, 4Mhz,...",
            creation_date: 'Tue Apr 11 2017 12:31:42 GMT+0200 (Central European Daylight Time)'
        },

    ],
    selectedProduct: {
        id: -1,
        price: 0,
        name: '',
        description: '',
        creation_date: '',
    },
};

export default (state=INITIAL_STATE, action) =>{
    switch (action.type) {

        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };

        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map((item) => {
                    if(item.id!==action.payload.id){
                        // This isn't the item we care about - keep it as-is
                        return item;
                    }

                    // Otherwise, this is the one we want - return an updated value
                    return {
                        ...item,
                        ...action.payload
                    }
                }),
            };

        case REMOVE_ARRAY_PRODUCT:
            let index = state.products.findIndex((p)=> p.id === action.payload.id);
            console.log(action.payload);
            return {
                ...state,
                products: [...state.products.slice(0,index),...state.products.slice(index+1)],
            };

        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            };

        case DESELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: {
                    id: -1,
                    price: 0,
                    name: '',
                    description: '',
                    creation_date: '',
                }
            };

        default:
            return state;
    }
}