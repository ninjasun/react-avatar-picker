import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { KEYCODE_ENTER, KEYCODE_ESC } from '../constant/constant'


class Avatar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            isActive:this.props.isActive

        };
    this._onClick = this._onClick.bind(this);

    }


    _onClick(e){
       // console.log("AVATAR event is: ", e);

        if (this.state.isActive){
            this.props.handlePopup();
            return
        }
        const model = this.props.model;
        //start loading animation
        this.setState({
            isLoading:true
        });

        this.props.setAvatar(model)

    }
    componentWillReceiveProps(nextProps) {


    }
    componentWillUpdate(nextProps, nextState) {

        if (this.state.isActive !== nextProps.isActive){
            this.setState({
                isActive:nextProps.isActive
            })
        }
        if (this.props.isLoading !== this.state.isLoading ){

            this.setState({
                isLoading:false
            })
        }
    }
    keyPressed(event) {
        var code = event.keyCode || event.which;

        if (code === KEYCODE_ESC){

            this.props.handlePopup();
        }
        if(code === KEYCODE_ENTER) {

            this._onClick(event)
        }

    }
    /*TO DO*/
    handleTouchTap(e){
        console.log("AVATAR onTouchTap: ",e)
        this._onClick(e)
    }

    render(){

            return(
                <div
                    className={this.state.isActive ? 'avatarContainer ' + 'active' : 'avatarContainer'}
                    onClick={this._onClick}
                    tabIndex={this.state.isActive ? -1 : 0}
                    onKeyDown={this.keyPressed.bind(this)}
                >
                    <div className={this.state.isLoading ? 'spinner' : 'hide'} />

                     <img
                        src={this.props.model.src}
                        alt={this.props.model.label}
                        className='avatar'

                        />
                </div>
            )
    }
}

export default Avatar;
