import{
    UPDATE_NAME,
    UPDATE_CLASS,
    UPDATE_PLAYER_NAME,
    UPDATE_LEVEL,
    UPDATE_RACE,
    UPDATE_ALIGNMENT,
    UPDATE_EXPERIENCE,
    UPDATE_EXPERIENCE_NEXT_LEVEL
} from "../constants/actionTypes" 

export const initialState = {
    name:"",
    playerName:"",
    classTitle:"",
    level:"",
    alignment:"",
    race:"",
    experience:"",
    experienceNext:""
}

const characterReducer = (state = initialState, action) =>{ 
    switch (action.type){
        case UPDATE_NAME:
            return {...state, name: action.payload.target.value}
        case UPDATE_CLASS:
            return {...state, classTitle:action.payload.target.value}
        case UPDATE_PLAYER_NAME:
            return {...state, playerName:action.payload.target.value}
        case UPDATE_LEVEL:
            return {...state, level:action.payload.target.value}
        case UPDATE_RACE:
            return {...state, race:action.payload.target.value}
        case UPDATE_ALIGNMENT:
            return {...state, alignment:action.payload.target.value}
        case UPDATE_EXPERIENCE:
            return {...state, experience:action.payload.target.value}
        case UPDATE_EXPERIENCE_NEXT_LEVEL:
            return {...state, experienceNext:action.payload.target.value}
        default:
            return state;
    }
};

export default characterReducer; 