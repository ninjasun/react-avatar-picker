import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive:false,
            model:props.model
        };
        this._onClick = this._onClick.bind(this);
    }

    _onClick(e){
        e.preventDefault();
        this.setState({
            isActive:true
        });

        this.props.handlePopup();

    }
    componentWillUpdate(nextProps, nextState) {

        if (this.state.model !== nextProps.model){

            this.setState({
                model:nextProps.model,
                isActive:false
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.state.isActive !== nextProps.isActive){
            this.setState({
                isActive:nextProps.isActive
            })
        }
    }
    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            //Do stuff in here

            this._onClick(event)
        }
    }

    render(){


        return(
            <img
                src={this.props.model.src}
                className={this.state.isActive ? 'active user-profile' : 'user-profile user-profile-hover'}
                onClick={this._onClick}
                alt={this.props.model.label}
                tabIndex='0'
                onKeyPress={this.enterPressed.bind(this)}

            />
        )
    }
}



export default UserProfile;