import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers';
import state from './State';
import thunk from 'redux-thunk';

const store = createStore(reducers, state ,compose(applyMiddleware(thunk),));

export default store;
