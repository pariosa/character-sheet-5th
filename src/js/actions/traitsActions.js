
import {
    ADD_TRAIT,
    REMOVE_TRAIT,
    UPDATE_TRAIT
} from '../constants/actionTypes';

export const updateTrait = trait => ({
    type:UPDATE_TRAIT,
    payload:trait
})

export const addTrait = trait =>({
    type:ADD_TRAIT,
    payload:trait
})

export const removeTrait = trait =>({
    type:REMOVE_TRAIT,
    payload:trait
})