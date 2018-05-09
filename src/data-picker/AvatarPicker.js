import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Popup from './components/popup/Popup';
import AvatarList from "./components/avatar-list/AvatarList";
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
            popupNextAnimationClassName:''
        };

        this.setCurrentAvatar = this.setCurrentAvatar.bind(this);
        this.handleOpenPopup = this.handleOpenPopup.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyDownUpdateAvatar = this.onKeyDownUpdateAvatar.bind(this);
    }


    handleClosePopup(){
        const _self = this;
        if (_self.state.isPopupOpen){
            _self.setState({
                popupNextAnimationClassName:POPUP_LEAVING_CLASS
            });
            setTimeout(function(){
                _self.setState({
                    isPopupOpen: false
                })
            },POPUP_FADE_OUT)
        }
    }


    handleOpenPopup(){
        const _self = this;
        if (!_self.state.isPopupOpen){
            _self.setState({
                isPopupOpen:true,
                popupNextAnimationClassName:POPUP_ENTERING_CLASS
            })
        }
    }


    setCurrentAvatar(avatar){
         let _self = this;
         _self.setState({
              isLoading: true,
              nextAvatar:avatar
           }
        );
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
                console.log(error);
                _self.setState({
                    isLoading: false
                });
                _self.handleClosePopup()
            });
    }


    onKeyDown(avatar, event){
        const _self = this;
        if (event.keyCode === KEYCODE_ENTER){
            if (!_self.state.isPopupOpen){
                _self.handleOpenPopup()
            }

        }
        if (event.keyCode === KEYCODE_ESC){
            if (_self.state.isPopupOpen){
                _self.handleClosePopup()
            }
        }
    }


    onKeyDownUpdateAvatar(avatar, event){
        const _self = this;
        if (event.keyCode === KEYCODE_ENTER){
            _self.setCurrentAvatar(avatar);

        }
        if (event.keyCode === KEYCODE_ESC){
                _self.handleClosePopup()
        }
    }


    renderPopup(){
        const _self = this;
        return(
            <Popup
                className={'popup-container ' + _self.state.popupNextAnimationClassName}
                handleClosePopup={_self.handleClosePopup}
            >
                <AvatarList avatarList={_self.props.avatarList}
                            currentAvatar={_self.state.currentAvatar}
                            nextAvatar={_self.state.nextAvatar}
                            onClick={_self.setCurrentAvatar}
                            isLoading={_self.state.isLoading}
                            onKeyDown={_self.onKeyDownUpdateAvatar}
                />
            </Popup>
        )
    }


    render() {
        let currentAvatar = this.state.currentAvatar;
        const _self = this;
        return (
                <div className={'avatar-picker'}>
                    <Avatar
                        avatar={currentAvatar}
                        onClick={_self.handleOpenPopup}
                        className={'current-avatar'}
                        onKeyDown={_self.onKeyDown}
                        eventEnabled={!this.state.isLoading}
                    />
                    {_self.state.isPopupOpen ? _self.renderPopup() : ''}
                </div>
        );
    }
}

AvatarPicker.proptype = {
    avatarList:PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AvatarPicker;
