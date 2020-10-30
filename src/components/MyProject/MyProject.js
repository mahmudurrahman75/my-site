import React from 'react';
import "./MyProject.css";
import Navbar from '../Navbar/Navbar';
import ProjectData from '../ProjectData/ProjectData';

import './MyProject.css';
import Card from '../Card/Card';

const MyProject = () => {
    return (
        <div className="myProject">
            <Navbar></Navbar>
            <ProjectData></ProjectData>
            <Card></Card>
        </div>
    );
};

export default MyProject;