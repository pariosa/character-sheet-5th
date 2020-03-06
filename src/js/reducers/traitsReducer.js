
import {
    ADD_TRAIT,
    REMOVE_TRAIT,
    UPDATE_TRAIT
} from '../constants/actionTypes';

const initialState = [];
const traitsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_TRAIT:
            const newTrait= {};
            newTrait.trait = '';
            newTrait.id = state.length;
            for (let x =0; x<state.length; x++){
                if(state.find(node => node.id === x) === undefined){
                    newTrait.id = x;
                }
            }
            return[...state,newTrait];
        case UPDATE_TRAIT:
            const traitInState = state.find( 
                trait => trait.id === parseInt(action.payload.nativeEvent.path[1].id)
            );
            const traitIndex = state.indexOf(traitInState);
            const traitInStateObject = new Object;
            let keys;
            for(keys in traitInState){
                traitInStateObject[keys] = traitInState[keys];
            }
            traitInStateObject.trait = action.payload.target.value;
            return[
                ...state.map((item, index)=>
                    index === traitIndex 
                    ? traitInStateObject
                    : item
                )
            ];
        case REMOVE_TRAIT: 
            return state.filter(trait=>trait.id !== parseInt(action.payload.nativeEvent.path[1].id))
        default:
            return state;
    }
}

export default traitsReducer;