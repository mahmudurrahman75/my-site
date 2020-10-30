import React from 'react';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import pic2 from '../../images/pic2.jpg';

const ContactMe = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(${pic2})`}} className="header">
            <Navbar></Navbar>
            <Contact></Contact>
        </div>
    );
};

export default ContactMe;