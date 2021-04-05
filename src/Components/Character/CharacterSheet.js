import React, { Component } from 'react';
import Traits from "../Traits/Traits";
import css from '../../css/CharacterSheet.css'
import Header from "../UIComponents/Header";
import SideDrawer from '../UIComponents/SideDrawer';
import RegisterModal from '../Modals/RegisterModal';
import LoginModal from '../Modals/LoginModal';
import CharacterInfo from './CharacterInfo';
class CharacterSheet extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    
    render(){
        const sideDrawer = <SideDrawer />
        return(
            <div className="CharacterSheet">
                <CharacterInfo/>
                <Traits/>
                <RegisterModal/>
                <LoginModal/>
            { sideDrawer }
            </div>
        )
    }
    
}

export default CharacterSheet;