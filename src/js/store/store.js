import thunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducer from '../reducers/rootReducer';
import config from '../firebase/config';
const rrfConfig = {
    attachAuthIsReady:true,
    userProfile:'users',
    enableLogging:true,
    useFirestoreForProfile:true
};

firebase.initializeApp(config);

const store = createStore(
    rootReducer,
    compose(
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, rrfConfig),
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//development
    )
);

export default store;