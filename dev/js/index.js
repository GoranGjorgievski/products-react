import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsApp from './reducers';
import { loadState, saveState } from './localStorage';
import App from './app';
import { createLogger } from 'redux-logger';

const middlewares = [thunk];

if (true) {
    const logger = createLogger({});
    middlewares.push(logger);
}

let persistedState = loadState();
let store = createStore(productsApp, persistedState, applyMiddleware(...middlewares));

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
