import {combineReducers} from 'redux';

import modals from './modals';
import product from './product';

const productsApp = combineReducers({
    modals: modals,
    product: product,
});

export default productsApp;

