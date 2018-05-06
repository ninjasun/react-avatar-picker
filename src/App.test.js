import React from 'react';
import ReactDOM from 'react-dom';
import AvatarPicker from "./components/AvatarPicker";
import renderer from 'react-test-renderer';
import AvatarList from './components/AvatarList';
import AvatarIcon from './components/AvatarIcon';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';



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


/*
*  TEST COMPONENT SET CURRENT AVATAR METHOD
*/
describe(' <AvatarPicker />', () => {


    it('It should renders 7 avatar components', () => {
            const wrapper = shallow(
                <AvatarPicker avatarList={avatarList} />
            );

        });


    it('It should set the current avatar method of Avatar Picker Component to have id=4', () => {


    });
});


