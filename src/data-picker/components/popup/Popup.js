import React from 'react';
import onClickOutside from 'react-onclickoutside';

import PropTypes from 'prop-types';

import { MOUSE_LEFT_CLICK_EVENT } from "../../constant/constant";
import './popup.css';

const Popup = ({ className, children, handleClosePopup}) => {

    const handleClickOutside = event => {
        if (event.button === MOUSE_LEFT_CLICK_EVENT){
            handleClosePopup();
        }
    };

        return (
            <div className={ className } >
                <div className={'popup-triangle-up'}/>
                <h1 className={'popup-title'}> Choose your avatar</h1>
                {children}
            </div>
        );
    };


Popup.proptypes = {
    className:PropTypes.string.isRequired,
    handleClosePopup:PropTypes.func.isRequired,
    children:PropTypes.arrayOf(PropTypes.object)
};

export default onClickOutside(Popup);
