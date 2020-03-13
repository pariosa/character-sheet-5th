import React, { Component } from 'react';
import { logout } from "../../js/actions/authActions" 
import { connect } from 'react-redux';

 
const mapDispatchToProps =dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

class LogoutButton extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){ 
        return(
            <div className="loginButton right menu">
                <a  className="ui item">
                    Logout
                </a>
            </div>
        )
    }
}
export default connect(mapDispatchToProps)(LogoutButton)