import { getCharactersThunk, getCharacer } from './getCharacterListActions';
import { reduxFirestore, getFirestore } from 'redux-firestore';

export const login = (credentials) =>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
            dispatch({type:'TOGGLE_LOGIN_MODAL'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR'})
        })
    }
}

export const register = (newUser)=>{
    return (dispatch, getState, {getFirebase, getFireStore})=>{
        const firebase = getFirebase()
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                username:newUser.username
            });
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
            dispatch({type:'TOGGLE_REGISTER_MODAL'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR'})
        })
    }
}

export const logout = () =>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'LOGOUT_SUCCESS'})
        })
    }
}