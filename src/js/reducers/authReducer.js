import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../constants/actionTypes'

const initialState = {
    authError:null
}

const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case SIGNUP_SUCCESS:
            return {...state,authError: null}
        case SIGNUP_ERROR:
            return {...state,authError: action.err.message}
        case LOGIN_ERROR:
            return {...state,authError: 'Login failed!'}
        case LOGIN_SUCCESS:
            return {...state,authError:null}
        case LOGOUT_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default authReducer;