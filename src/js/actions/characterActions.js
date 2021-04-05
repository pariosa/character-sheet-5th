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

export const updateName = name => ({
    type:UPDATE_NAME,
    payload:name
})
export const updateClass = className =>({
    type:UPDATE_CLASS,
    payload:className
})
export const updateLevel = level =>({
    type: UPDATE_LEVEL,
    payload:level
})
export const updatePlayerName = playerName =>({
    type:UPDATE_PLAYER_NAME,
    payload:playerName
})
export const updateAlignment = alignment =>({
    type:UPDATE_ALIGNMENT,
    payload:alignment
})
export const updateRace = race =>({
    type:UPDATE_RACE,
    payload:race
})
export const updateExperience = experience =>({
    type:UPDATE_EXPERIENCE,
    payload:experience
})
export const updateExperienceNextLevel = expNext => ({
    type:UPDATE_EXPERIENCE_NEXT_LEVEL,
    payload:expNext
})