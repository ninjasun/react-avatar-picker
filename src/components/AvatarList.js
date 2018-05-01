import React from 'react';

import Avatar from './Avatar';

const AvatarList = ({ avatarList, avatarActiveId, setAvatar, handlePopup}) =>  {
    return(
        <ul className='avatar-list-container'>

            {avatarList.map((avatar) =>

                <li key={avatar.id}>
                    <Avatar
                        model={avatar}
                        isActive={avatar.id === avatarActiveId  ? true : false }
                        setAvatar={setAvatar}
                        isLoading={false}
                        handlePopup={handlePopup}
                    />
                </li>
            )}

        </ul>
    )
};

export default AvatarList;