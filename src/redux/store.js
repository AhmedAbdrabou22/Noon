import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer'
const initialState = {};
const meddleware = [thunk]
const store = createStore(rootReducer, initialState, applyMiddleware(...meddleware));
export default store