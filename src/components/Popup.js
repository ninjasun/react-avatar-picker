import React from 'react';
import onClickOutside from 'react-onclickoutside';

import PropTypes from 'prop-types';

import { MOUSE_LEFT_CLICK_EVENT } from "../constants/";


class Popup extends React.Component  {

    handleClickOutside = event => {
        if (event.button === MOUSE_LEFT_CLICK_EVENT) {
            this.props.handleClosePopup();
        }
    };

    render() {
        return (
            <div className={this.props.className}>
                <div className="popup-triangle-up" />
                <h1 className="popup-title" >Choose your avatar</h1>
                {this.props.children}
            </div>
        );
    }
}


Popup.proptypes = {
    className:PropTypes.string.isRequired,
    handleClosePopup:PropTypes.func.isRequired,
    children:PropTypes.arrayOf(PropTypes.object)
};


export default onClickOutside(Popup);
