import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import traitsReducer from './traitsReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';
import characterReducer from './characterReducer';

const reducers = {
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    traits:traitsReducer,
    ui:uiReducer,
    auth:authReducer,
    character:characterReducer,
}

const reducer = combineReducers(reducers);

export default reducer;