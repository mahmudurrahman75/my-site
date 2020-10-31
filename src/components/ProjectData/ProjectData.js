import React from 'react';
import './ProjectData.css';
// import prj1 from '../../images/prj1.JPG';
// import prj2 from '../../images/prj2.JPG';
// import prj3 from '../../images/prj3.JPG';
// import prj4 from '../../images/prj4.JPG';
import { Link } from 'react-router-dom';
import ProjectAnimation from '../ProjectAnimation/ProjectAnimation';
import Test from '../Test/Test';

const ProjectData = () => {
    return (
        <div>
            <ProjectAnimation></ProjectAnimation>
            <Test></Test>
        </div>
    );
};

export default ProjectData;