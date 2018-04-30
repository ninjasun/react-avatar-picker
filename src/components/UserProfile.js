import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { KEYCODE_ENTER, MOUSE_LEFT_CLICK_EVENT} from "../constant/constant";

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
        if(code === KEYCODE_ENTER) {

            this._onClick(event)
        }
    }

    /*TO DO*/
    handleTouchTap(e){
        //console.log("UserProfile touch tap: ",e)
        if (e.button !== MOUSE_LEFT_CLICK_EVENT)  this._onClick(e)
    }

    render(){
        const { model } = this.props;

        return(
            <img
                src={model.src}
                className={this.state.isActive ? 'active user-profile' : 'user-profile user-profile-hover'}
                onClick={this._onClick}
                alt={model.label}
                tabIndex='0'
                onKeyPress={this.enterPressed.bind(this)}
            />
        )
    }
}



export default UserProfile;
