

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}

const store = configureStore();
export default store;


