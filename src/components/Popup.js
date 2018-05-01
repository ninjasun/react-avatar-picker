import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import PropTypes from 'prop-types';

import { MOUSE_LEFT_CLICK_EVENT } from "../constant/constant";

class Popup extends Component {


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

                    <div style={styles.arrowUp}/>
                    <h1 style={styles.popupTitle}> Choose your avatar</h1>

                        {this.props.children}

                </div>

        );
    }
}


const styles = {
    popupTitle:{
        color: 'rgb(249, 249, 249)',
        fontSize: 16,
        fontWeight: 'normal',
        marginTop: 14,
        marginBottom: 14,
        fontFamily: "'Source Sans Pro', 'sans-serif'",
    },
    arrowUp : {
        width: 0,
        height: 0,
        position: 'absolute',
        top: -8,
        left: 146,
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: '8px solid  rgb(44, 48, 51)'
    }
};




export default onClickOutside(Popup);
