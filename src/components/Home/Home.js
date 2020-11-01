import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Icons from '../Icons/Icons';
import Navbar from '../Navbar/Navbar';
import Skill from '../Skill/Skill';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Icons></Icons>
            <Work></Work>
        </div>
    );
};

export default Home;