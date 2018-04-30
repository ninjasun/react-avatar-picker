import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import PropTypes from 'prop-types';

import { MOUSE_LEFT_CLICK_EVENT } from "../constant/constant";

class Popup extends Component {
    constructor(props) {
        super(props);

    }

    handleClickOutside = event => {
        console.log("event: ", event.button)
        if (event.button === MOUSE_LEFT_CLICK_EVENT){
            if (this.props.styleClass === 'bouceIn') this.props.handlePopup();
        }
    }

    render() {
        let style = 'popup-container ' + this.props.styleClass ;

        return (

                <div className={style}>

                    <div className="arrow-up"/>
                    <h1 className='popup-title'> Choose your avatar</h1>

                        {this.props.children}

                </div>

        );
    }
}

export default onClickOutside(Popup);
