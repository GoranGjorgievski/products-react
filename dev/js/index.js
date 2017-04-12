import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import productsApp from './reducers';
import App from './App';
import { createLogger } from 'redux-logger';

const middlewares = [thunk];

if (true) {
    const logger = createLogger({});
    middlewares.push(logger);
}

let store = createStore(productsApp, applyMiddleware(...middlewares));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
