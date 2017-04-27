import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import modals from './modals';
import product from './product';

const productsApp = combineReducers({
    modals: modals,
    product: product,
    routing: routerReducer,
});

export default productsApp;

