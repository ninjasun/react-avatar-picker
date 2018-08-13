import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Popup from './components/popup/Popup';
import AvatarList from "./components/avatarList/AvatarList";
import Avatar from './components/avatar/Avatar';

import {
    POPUP_FADE_OUT,
    KEYCODE_ENTER,
    KEYCODE_ESC,
    POPUP_LEAVING_CLASS,
    POPUP_ENTERING_CLASS
} from './constant/constant';

import API_update_avatar from './API_MOCK.js';


class AvatarPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAvatar : this.props.avatarList[0],
            nextAvatar : this.props.avatarList[0],
            isPopupOpen:false,
            popupNextAnimationClassName:'',
            isLoading : false,
        };
    }


    handleClosePopup = () => {
        if (this.state.isPopupOpen){
            this.setState({
                popupNextAnimationClassName:POPUP_LEAVING_CLASS
            });
            const _self = this;
            setTimeout (function(){
                _self.setState({
                    isPopupOpen: false
                })
            }, POPUP_FADE_OUT)
        }
    }


    handleOpenPopup = () => {
        if (!this.state.isPopupOpen){
            this.setState({
                isPopupOpen:true,
                popupNextAnimationClassName:POPUP_ENTERING_CLASS
            })
        }
    }


    setCurrentAvatar = (avatar) =>{
         this.setState({
              isLoading: true,
              nextAvatar:avatar
           }
        );
        const _self = this; 
        API_update_avatar(avatar)
            .then(res => {
                if (res.code === 200){
                    _self.setState({
                        currentAvatar: avatar,
                        isLoading:false
                    });
                    _self.handleClosePopup()
                }
            })
            .catch((error) => {
                //console.log(error);
                _self.setState({
                    isLoading: false
                });
                _self.handleClosePopup()
            });
    }


    onKeyDown = (avatar, event) => {
        if (event.keyCode === KEYCODE_ENTER){
            if (!this.state.isPopupOpen){
                this.handleOpenPopup()
            }

        }
        if (event.keyCode === KEYCODE_ESC){
            if (this.state.isPopupOpen){
                this.handleClosePopup()
            }
        }
    }


    onKeyDownUpdateAvatar = (avatar, event) => {
        if (event.keyCode === KEYCODE_ENTER){
            this.setCurrentAvatar(avatar);

        }
        if (event.keyCode === KEYCODE_ESC){
                this.handleClosePopup()
        }
    }


    renderPopup = () =>{
        return(
            <Popup
                className={'popup-container ' + this.state.popupNextAnimationClassName}
                handleClosePopup={this.handleClosePopup}
            >
                <AvatarList avatarList={this.props.avatarList}
                            currentAvatar={this.state.currentAvatar}
                            nextAvatar={this.state.nextAvatar}
                            onClick={this.setCurrentAvatar}
                            isLoading={this.state.isLoading}
                            onKeyDown={this.onKeyDownUpdateAvatar}
                />
            </Popup>
        )
    }


    render() {
        const currentAvatar = this.state.currentAvatar;
        
        return (
                <div className='avatar-picker-container'>
                    <Avatar
                        avatar={currentAvatar}
                        onClick={this.handleOpenPopup}
                        className="current-avatar"
                        onKeyDown={this.onKeyDown}
                        eventEnabled={!this.state.isLoading}
                    />
                    {this.state.isPopupOpen ? this.renderPopup() : ''}
                </div>
        );
    }
}

AvatarPicker.proptype = {
    avatarList:PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AvatarPicker;
