import React, { Component } from 'react';

import PropTypes from 'prop-types';
import 'normalize.css'

import Popup from './Popup';
import Avatar from './Avatar';
import UserProfile from './UserProfile';


class AvatarPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modelActive:{},
            styleClass:''

        };

        this.setAvatar = this.setAvatar.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
    }


    UNSAFE_componentWillMount(){
        this.setState({
            modelActive : this.props.avatarList[0],

        })
    }


    componentWillReceiveProps(nextProps){
        //console.log("Avatar Picker next Props: ", nextProps)
    }

    handlePopup(){
        //console.log("Setting popup status to: ", this.state.isPopupOpen)
           if(this.state.styleClass === 'bouceIn'){
               this.setState({
                   styleClass:'fadeOut'
               })
           }
           else if (this.state.styleClass === 'fadeOut'){
               this.setState({
                   styleClass:'bouceIn'
               })
           }
           else{
               this.setState({
                   styleClass:'bouceIn'
               })
           }

    }
    setAvatar(model){
      //POST REQUEST TO UPDATE USER IN THE DB

        //if model clicked is the same we have now
        let _self = this;


        setTimeout( () => {
                _self.setState({
                    modelActive: model,
                    styleClass:'fadeOut',

                });
            }
        ,1000)
    }

    render() {

        return (
            <div className="avatar-container">

                <UserProfile
                    model={this.state.modelActive}
                    handlePopup={this.handlePopup}
                    isLoading={this.state.isLoading}

                />

                <Popup
                       styleClass={this.state.styleClass}
                       handlePopup={this.handlePopup}
                >
                    <ul className='avatar-list-container'>

                        {this.props.avatarList.map((avatar) =>

                            <li key={avatar.id}>
                                <Avatar
                                    model={avatar}
                                    isActive={avatar.id === this.state.modelActive.id  ? true : false }
                                    setAvatar={this.setAvatar}
                                    isLoading={false}
                                    handlePopup={this.handlePopup}
                                />
                            </li>
                        )}

                    </ul>
                </Popup>
            </div>
        );
    }
}

export default AvatarPicker;
