import {createStore} from 'redux';

import cartReducer from '../reducers/reducer';
const store = createStore(cartReducer)
export default store;
