import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner'
import AvatarIcon from "./AvatarIcon";

const AvatarList = ({avatarList, isLoading, currentAvatar, nextAvatar, onClick, onKeyDown}) => {

        return (
            <ul className={'avatar-list-container'}>
                {avatarList.map((avatar) =>
                    <li
                        key={avatar.id}
                        className={'avatar-container'}>

                        {isLoading && nextAvatar.id === avatar.id && <Spinner />}

                        <AvatarIcon
                            avatar={avatar}
                            className={currentAvatar.id === avatar.id ? 'avatar selected': 'avatar'}
                            onClick={onClick}
                            onKeyDown={onKeyDown}
                        />
                    </li>
                )}
            </ul>
        )

    };

AvatarList.proptypes = {
    avatarList:PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading:PropTypes.bool.isRequired,
    currentAvatar:PropTypes.object.isRequired,
    nextAvatar:PropTypes.object.isRequired,
    onClick:PropTypes.func.isRequired,
    onKeyDown:PropTypes.func.isRequired
};

export default AvatarList;