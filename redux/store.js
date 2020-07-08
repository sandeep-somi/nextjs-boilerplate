import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';

const store = context => createStore(rootReducer, undefined ,applyMiddleware(thunk));

export default createWrapper(store, { debug: true });