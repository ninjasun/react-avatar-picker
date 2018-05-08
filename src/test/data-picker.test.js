import React from 'react';
import ReactDOM from 'react-dom';
import AvatarPicker from "../data-picker/components/AvatarPicker";
import renderer from 'react-test-renderer';
import AvatarList from '../data-picker/components/AvatarList';
import AvatarIcon from '../data-picker/components/AvatarIcon';


const avatarList=     [
    { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
    { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
    { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
    { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
    { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
    { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
];


it('Avatar Picker renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AvatarPicker avatarList={avatarList} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


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

it('AvatarIcon Component renders correctly', () => {
    let props = {};
    props.avatar =   { "src": "avatar2.png", "label": "Avatar 2", "id": 2 };
    props.className = 'avatar';
    props.onClick = function(){};
    props.onKeyDown = function(){};

    const tree = renderer.create(
        <AvatarIcon
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

