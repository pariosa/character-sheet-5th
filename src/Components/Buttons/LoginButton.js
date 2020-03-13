import React, { Component } from 'react';


import { toggleLoginModal } from '../../js/actions/uiActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        isOpen:false
    }
}

const mapDispatchToProps = {
    toggleLoginModal
}

class LoginButton extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        const { toggleLoginModal }= this.props;
        return(
            <div className="loginButton right menu">
                <a  className="ui item">
                    Login
                </a>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginButton)