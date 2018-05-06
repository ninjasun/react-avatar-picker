
import React from 'react';
import PropTypes from 'prop-types';


const AvatarIcon  = ({avatar, className, onClick,  onKeyDown}) => {
    return (
        <img
            src={avatar.src}
            alt={avatar.label}
            className={className}
            onClick={onClick.bind(this, avatar)}
            tabIndex={0}
            onKeyDown={onKeyDown.bind(this, avatar)}
        />
    )
};

AvatarIcon.propTypes = {
    avatar: PropTypes.object.isRequired,
    className:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
    onKeyDown:PropTypes.func.isRequired
};


export default AvatarIcon;