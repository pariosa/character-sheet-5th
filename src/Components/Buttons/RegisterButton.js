import React, { Component } from 'react';
import { toggleRegisterModal } from '../../js/actions/uiActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        isOpen:false
    }
}

const mapDispatchToProps = {
    toggleRegisterModal
}

class RegisterButton extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        const { toggleRegisterModal }= this.props;
        return(
            <div className="registerButton right menu"  >
        <a  className="ui item" onClick={toggleRegisterModal}>
                    Register
                </a>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterButton)