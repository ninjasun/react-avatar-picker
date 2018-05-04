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
                            tabIndex={0}
                            onClick={onClick}
                            onKeyDown={onKeyDown}
                        />
                    </li>
                )}
            </ul>
        )

    };

AvatarList.proptypes = {
    avatarList:PropTypes.arrayOf(PropTypes.object),
    isLoading:PropTypes.bool,
    currentAvatar:PropTypes.object,
    nextAvatar:PropTypes.object,
    onClick:PropTypes.func,
    onKeyDown:PropTypes.func
}

export default AvatarList;