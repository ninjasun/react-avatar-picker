import React from 'react';
import onClickOutside from 'react-onclickoutside';

import PropTypes from 'prop-types';

import { MOUSE_LEFT_CLICK_EVENT } from "../constants/";


function Popup( props ){
        return (
            <div className={props.className}>
                <div className="popup-triangle-up" />
                <h1 className="popup-title" >Choose your avatar</h1>
                {props.children}
            </div>
        );
    }


Popup.proptypes = {
    className:PropTypes.string.isRequired,
    handleClosePopup:PropTypes.func.isRequired,
    children:PropTypes.arrayOf(PropTypes.object)
};


export default onClickOutside(Popup, {
    handleClickOutside: function(instance){
        return function(event){
            if (event.button === MOUSE_LEFT_CLICK_EVENT) {
                instance.props.handleClosePopup();
            }
        }
    }
});
