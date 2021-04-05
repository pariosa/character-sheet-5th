import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import {
    updateName,
    updateClass, 
    updateLevel, 
    updatePlayerName, 
    updateAlignment, 
    updateRace,
    updateExperience,
    updateExperienceNextLevel
} from '../../js/actions/characterActions'
    
    const mapDispatchToProps = {
        updateName,
        updateClass, 
        updateLevel, 
        updatePlayerName, 
        updateAlignment, 
        updateRace,
        updateExperience,
        updateExperienceNextLevel, 
    }
    const mapStateToProps = state =>{
        return {
            name:state.character.name,
            playerName:state.character.playerName,
            classTitle:state.character.classTitle,
            level:state.character.level,
            alignment:state.character.alignment,
            race:state.character.race,
            experience:state.character.experience,
            experienceNext:state.character.experienceNext
        }
    }
    
    class CharacterInfo extends Component {
        constructor(props){
            super(props)
            this.props = props
        }
        render(){
            const {
                name,
                playerName,
                classTitle,
                level,
                alignment,
                race,
                experience,
                experienceNext,
                updateName,
                updateClass, 
                updateLevel, 
                updatePlayerName, 
            updateAlignment, 
            updateRace,
            updateExperience,
            updateExperienceNextLevel, 
        } = this.props

        return(
            <div className="character-info">
                <TextField  onChange={updateName}
        className="name" label="Name" value={name} variant="outlined" />
                <TextField onChange={updateClass} className="classTitle" label="Class" value={classTitle} variant="outlined" />
                <TextField onChange={updateLevel}  className="level" label="Level" value={level} variant="outlined" />
                <TextField onChange={updatePlayerName}  className="playerName" label="Player Name" value={playerName} variant="outlined" />
                <TextField onChange={updateRace}  className="race" label="Race" value={race} variant="outlined" />
                <TextField onChange={updateAlignment} className="alignment" label="Alignment" value={alignment} variant="outlined" />
                <TextField onChange={updateExperience} className="experience" label="Exp" value={experience} variant="outlined" />
                <TextField onChange={updateExperienceNextLevel} className="experienceNext" label="Next Level" value={experienceNext} variant="outlined" />
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CharacterInfo)