import { combineReducers } from 'redux';

import traitsReducer from './traitsReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';

const reducers = {
    traits:traitsReducer,
    ui:uiReducer,
    auth:authReducer
}

const reducer = combineReducers(reducers);

export default reducer;