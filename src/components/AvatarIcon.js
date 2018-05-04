
import React from 'react';
import PropTypes from 'prop-types';


const AvatarIcon  = ({avatar, className, onClick,  onKeyDown, tabIndex}) => {
    return (
        <img
            src={avatar.src}
            alt={avatar.label}
            className={className}
            onClick={onClick.bind(this, avatar)}
            tabIndex={tabIndex}
            onKeyDown={onKeyDown.bind(this, avatar)}
        />
    )
};

AvatarIcon.propTypes = {
    avatar: PropTypes.object.isRequired,
    className:PropTypes.string.isRequired,
    onClick:PropTypes.func,
    tabIndex:PropTypes.number,
    onKeydown:PropTypes.func
};


export default AvatarIcon;