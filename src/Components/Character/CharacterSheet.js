import React, { Component } from 'react';
import Traits from "../Traits/Traits";


class CharacterSheet extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    
    render(){
        return(
            <div className="CharacterSheet">
                <Traits/>
            </div>
    
        )
    }
    
}

export default CharacterSheet;