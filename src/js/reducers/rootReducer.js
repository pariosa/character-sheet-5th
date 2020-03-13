import { combineReducers } from 'redux';

import traitsReducer from './traitsReducer';
import uiReducer from './uiReducer';


const reducers = {
    traits:traitsReducer,
    ui:uiReducer
}

const reducer = combineReducers(reducers);

export default reducer;