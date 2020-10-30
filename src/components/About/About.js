import React from 'react';
import './About.css';
import myself from '../../images/myself.jpg';

const About = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center about">
            <div className="col-md-4 offset-md-1">
                <img src={myself} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h1 style={{color:"#3E4559"}}>About Myself</h1>
                <p className="text-secondary">Hi there, I am Md. Mahmudur Rahman, professionally a Civil engineer and passionately a web developer, affiliate marketer and search engine optimizer (SEO) . I am an active member of many forums and social bookmarking sites like reedit, digitalpoint, Quora etc. I have completed 30+ web project and also an extensive experience of researching on keywords for several niche sites.

                Expertise: HTML, CSS, Bootstrap.
                Comfortable: XHTML, HTML5, CSS3, JavaScript, ES6, React, Node, Express, Material UI, SEO(Search Engine Optimization ),Data Analysis, Product Research, Keyword Research, Photoshop
                Familiar: SCSS, Mongodb, Firebase, Redux.
                Tools: Git, Chorome Dev Tool, Netlify, VS Code, Brackets etc.</p>
                <button style={{backgroundColor:'orange', color:'white'}} className="btn" ><a  href="https://docs.google.com/uc?export=download&id=19BDmH-MGKZEL2MyfWu4BSlJBT3pAy6vg" download target="_blank">Download Resume</a></button>
            </div>
        </main>
    );
};

export default About;