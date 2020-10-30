import React from 'react';
import './Header.css';
import bg1 from '../../images/bg1.jpg';
import Animation from '../Animation/Animation';

const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ),url(${bg1})`}} className="header">
            <Animation></Animation>
        </div>
    );
};

export default Header;