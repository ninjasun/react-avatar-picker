import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import AvatarPicker from "../data-picker/AvatarPicker";
import AvatarList from '../data-picker/components/avatar-list/AvatarList';
import Avatar from '../data-picker/components/avatar/Avatar';


const avatarList = [
    { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
    { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
    { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
    { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
    { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
    { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
];


/*
*  TEST COMPONENT AVATAR PICKER
*/

it('Avatar Picker  Component renders correctly', () => {
    const tree = renderer.create(
        <AvatarPicker avatarList={avatarList}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

/*
*  TEST COMPONENT AVATARICON
*/

it('Avatar Component renders correctly', () => {
    let props = {};
    props.avatar =   { "src": "avatar2.png", "label": "Avatar 2", "id": 2 };
    props.className = 'avatar';
    props.onClick = function(){};
    props.onKeyDown = function(){};

    const tree = renderer.create(
        <Avatar
            avatar={props.avatar}
            className={props.className}
            onKeyDown={props.onKeyDown}
            onClick={props.onClick}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});


/*
*  TEST COMPONENT AVATAR LIST
*/

it('Avatar List Component renders correctly', () => {
    let props = {};
    props.avatarList = avatarList;
    props.isLoading = false;
    props.nextAvatar =  {"src": "avatar4.png", "label": "Avatar 4", "id": 4};
    props.currentAvatar = { "src": "avatar2.png", "label": "Avatar 2", "id": 2 };
    props.onClick = function(){};
    props.onKeyDown = function(){};

    const tree = renderer.create(
        <AvatarList avatarList={props.avatarList}
                    isLoading={props.isLoading}
                    currentAvatar={props.currentAvatar}
                    nextAvatar={props.nextAvatar}
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
        />
    );

    expect(tree).toMatchSnapshot();
});

