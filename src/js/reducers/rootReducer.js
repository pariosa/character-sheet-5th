import { combineReducers } from 'redux';

import traitsReducer from './traitsReducer';


const reducers = {
    traits:traitsReducer
}

const reducer = combineReducers(reducers);

export default reducer;