import React, { Component } from 'react';
import Traits from "../Traits/Traits";
import css from '../../css/CharacterSheet.css'
import Header from "../UIComponents/Header";
import SideDrawer from '../UIComponents/SideDrawer';
import RegisterModal from '../Modals/RegisterModal';
import LoginModal from '../Modals/LoginModal';
class CharacterSheet extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    
    render(){
        const sideDrawer = <SideDrawer />
        return(
            <div className="CharacterSheet">
                
                <Traits/>
                <RegisterModal/>
                <LoginModal/>
            { sideDrawer }
            </div>
        )
    }
    
}

export default CharacterSheet;