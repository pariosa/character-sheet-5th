import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrawerToggle from './DrawerToggle';
import RegisterButton from '../Buttons/RegisterButton';
import LoginButton from '../Buttons/LoginButton';
import LogoutButton from '../Buttons/LogoutButton';

const mapStateToProps = (state)=>{
    return {
        auth: state.firebase.auth
    }
}

class Header extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        const { auth }= this.props;
        const button1 = auth.uid ? null : <LoginButton />;
        const button2 = auth.uid ?  <LogoutButton /> : <RegisterButton />;

        const drawerToggle = auth.uid ? <DrawerToggle/> :null;
        return(
            <div>
                <div className="ui Header">
                    Character sheet 5e
                </div>
                {drawerToggle}
                <div>
                    { button1 }
                </div>
                <div>
                    { button2 } 
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header)