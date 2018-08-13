
import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

const Avatar  = (props) => {
   function onClick(event){
        if (props.eventEnabled){
            props.onClick( props.avatar, event );
        }
    }
   function onKeyDown(event){
        if (props.eventEnabled){
            props.onKeyDown( props.avatar, event );
        }
    }
   
    return (
            <img
             src={props.avatar.src}
             alt={props.avatar.label}
             className={props.className}
             onClick={onClick}
             tabIndex={0}
             onKeyDown={onKeyDown}
        />
    )
}

Avatar.propTypes = {
    props: PropTypes.shape({
      avatar: PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired,
    className:PropTypes.string.isRequired,
    eventEnabled:PropTypes.bool,
    onClick:PropTypes.func.isRequired,
    onKeyDown:PropTypes.func.isRequired,  
    }),
};


export default Avatar;