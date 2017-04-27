import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productsApp from './reducers/index';
import { loadState, saveState } from './localStorage';
import App from './app';
import { createLogger } from 'redux-logger';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import ProductDetails from './components/product/productDetails';
import ProductList from './components/product/productList';

const middlewares = routerMiddleware(browserHistory);

/*
if (true) {
    const logger = createLogger({});
    middlewares.push(logger);
}
*/


let persistedState = loadState();
let store = createStore(
    productsApp,
    persistedState,
    applyMiddleware(middlewares)
);

store.subscribe(() => {
    saveState(store.getState());
});

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}></Route>
            <Route path="/p/:productId" component={ProductDetails} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
