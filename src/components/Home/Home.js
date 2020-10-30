import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Work></Work>
        </div>
    );
};

export default Home;