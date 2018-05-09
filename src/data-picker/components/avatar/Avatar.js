
import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

class Avatar  extends React.Component {
    onClick(event){
        if (this.props.eventEnabled){
            this.props.onClick( this.props.avatar, event);
        }
    }
    onKeyDown(event){
        if (this.props.eventEnabled){
            this.props.onKeyDown( this.props.avatar, event);
        }
    }
    render(){
        return (
            <img
             src={this.props.avatar.src}
             alt={this.props.avatar.label}
             className={this.props.className}
             onClick={this.onClick.bind(this)}
             tabIndex={0}
             onKeyDown={this.onKeyDown.bind(this)}
        />
    )
}

}
Avatar.propTypes = {
    avatar: PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired,
    className:PropTypes.string.isRequired,
    eventEnabled:PropTypes.bool,
    onClick:PropTypes.func.isRequired,
    onKeyDown:PropTypes.func.isRequired
};


export default Avatar;