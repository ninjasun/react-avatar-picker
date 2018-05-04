import React, { Component } from 'react';

import PropTypes from 'prop-types';
import 'normalize.css'

import injectTapEventPlugin from 'react-tap-event-plugin';
import Popup from './Popup';

import AvatarList from "./AvatarList";
import AvatarIcon from './AvatarIcon';

import {AJAX_CALL_DELAY, POPUP_FADE_OUT, KEYCODE_ENTER, KEYCODE_ESC} from '../constant/constant'


injectTapEventPlugin();



class AvatarPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAvatar:{},
            nextAvatar : {},
            isPopupOpen:false,
            popupNextAnimationClassName:''
        };

        this.setAvatar = this.setAvatar.bind(this);
        this.handleOpenPopup = this.handleOpenPopup.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyDownUpdateAvatar = this.onKeyDownUpdateAvatar.bind(this);
    }


    UNSAFE_componentWillMount(){
        this.setState({
            currentAvatar : this.props.avatarList[0],
            nextAvatar : this.props.avatarList[0]
        })
    }


    handleClosePopup(){
        const _self = this;
        if (_self.state.isPopupOpen){
            _self.setState({

                popupNextAnimationClassName:'fade-out'
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
                popupNextAnimationClassName:'bounce-in'
            })
        }
    }
    setAvatar(avatar){

        let _self = this;

      _self.setState({
              isLoading: true,
                nextAvatar:avatar
          }
      );
        setTimeout( () => {
                _self.setState({
                    currentAvatar: avatar,
                    isLoading:false
                });
                _self.handleClosePopup()
            }
        , AJAX_CALL_DELAY)
    }

    onKeyDown(avatar, event){
        const _self = this;
        if (event.keyCode == KEYCODE_ENTER){
            //console.log("ENTER PRESSED ")
            if (!_self.state.isPopupOpen){
                _self.handleOpenPopup()
            }

        }
        if (event.keyCode == KEYCODE_ESC){
           // console.log("ESC PRESSED ")
            if (_self.state.isPopupOpen){
                _self.handleClosePopup()
            }
        }
    }
    onKeyDownUpdateAvatar(avatar, event){

        const _self = this;
        if (event.keyCode == KEYCODE_ENTER){
         //   console.log("ENTER PRESSED ")
            _self.setAvatar(avatar);

        }
        if (event.keyCode == KEYCODE_ESC){
            //console.log("ESC PRESSED ")
                _self.handleClosePopup()
        }
    }

    render() {
        let currentAvatar = this.state.currentAvatar;
        const _self = this;
        return (
            <div className={'avatar-picker'}>

                <AvatarIcon
                    avatar={currentAvatar}
                    onClick={this.handleOpenPopup}
                    className={'avatar-selected'}
                    tabIndex={0}
                    onKeyDown={this.onKeyDown}
                />

                {this.state.isPopupOpen ?
                    <Popup
                        className={'popup-container ' + _self.state.popupNextAnimationClassName}
                       handleClosePopup={_self.handleClosePopup}
                    >
                        <AvatarList avatarList={_self.props.avatarList}
                            currentAvatar={_self.state.currentAvatar}
                            nextAvatar={_self.state.nextAvatar}
                            onClick={_self.setAvatar}
                            isLoading={_self.state.isLoading}
                            onKeyDown={_self.onKeyDownUpdateAvatar}
                        />

                </Popup>
                    : ''}
            </div>
        );
    }
}

AvatarPicker.proptype = {
    avatarList:PropTypes.arrayOf(PropTypes.object)
};

export default AvatarPicker;
