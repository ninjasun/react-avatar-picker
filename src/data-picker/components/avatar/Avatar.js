
import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

const Avatar  = ({avatar, className, onClick,  onKeyDown}) =>
        <img
            src={avatar.src}
            alt={avatar.label}
            className={className}
            onClick={onClick.bind(this, avatar, event)}
            tabIndex={0}
            onKeyDown={onKeyDown.bind(this, avatar, event)}
        />


Avatar.propTypes = {
    avatar: PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired,
    className:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    onKeyDown:PropTypes.func.isRequired
};


export default Avatar;