import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updateTrait,
    removeTrait
} from '../../js/actions/traitsActions';

const mapStateToProps = (state, ownProps) => {
    return {
        traits:ownProps.trait,
        id:ownProps.id
    }
}

const mapDispatchToProps = {
    removeTrait,
    updateTrait
}

class Trait extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        const {
            id,
            trait,
            updateTrait,
            removeTrait
        } = this.props
        return(
            <div className="trait" id={id}>
                <textarea value={trait} cols='50' onChange={updateTrait} />
                <button type="button" className="red detele deleteTrait" onClick={removeTrait}>x</button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trait)