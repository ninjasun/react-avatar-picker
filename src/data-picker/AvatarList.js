import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Spinner } from "../components";


const AvatarList = ( props ) => {
    const { avatarList, isLoading, currentAvatar, nextAvatar,  ...other } = props;
    return(
            <ul className="avatar-list-container">
                {avatarList.map((avatar) =>
                    <li
                        key={avatar.id}
                        className="avatar-container">

                        {isLoading && nextAvatar.id === avatar.id && <Spinner />}

                        <Avatar {...other}
                            avatar={avatar}
                            className={currentAvatar.id === avatar.id ? 'avatar selected': 'avatar'}
                            eventEnabled={!isLoading}
                            
                        />
                    </li>
                )}
            </ul>
        )
}


AvatarList.proptypes = {
    props: PropTypes.shape({
        avatarList:PropTypes.arrayOf(PropTypes.object).isRequired,
        isLoading:PropTypes.bool.isRequired,
        currentAvatar:PropTypes.object.isRequired,
        nextAvatar:PropTypes.object.isRequired,
        onClick:PropTypes.func.isRequired,
        onKeyDown:PropTypes.func.isRequired,
    }),
};


export default AvatarList;