import React, { useState } from 'react';
import "./Icons.css";
import bootstrap from '../../images/icons/bootstrap.jpg';
import css3 from '../../images/icons/css3.jpg';
import html from '../../images/icons/html.jpg';
import js from '../../images/icons/js.png';
import materialUi from '../../images/icons/materialUi.png';
import mongodb from '../../images/icons/mongodb.jpeg';
import node from '../../images/icons/node.jpg';
import react from '../../images/icons/react.jpg';
import seo from '../../images/icons/seo.jpg';
import express from '../../images/icons/express.png';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'

const Icons = () => {


    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })



    return (
        <div class="icons">


            <div onClick={() => toggle(!state)}>
                <animated.div
                    style={{
                    opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                    transform: x
                        .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        })
                        .interpolate(x => `scale(${x})`)
                    }}>
                    <h2 style={{textAlign:"center", marginTop:"0px", fontSize:"40px", fontWeight:"500", color:"goldenrod",marginBottom:"10px"}}>My Skills</h2>
                </animated.div>
            </div>



            <div className="d-flex justify-content-center brandIcon">
                <div className="w-75 row col-md-9 brandLogo">
                    <img src={js} alt=""/>
                    <img src={react} alt=""/>
                    <img src={node} alt=""/>
                    <img src={express} alt=""/>
                    <img src={materialUi} alt=""/>
                    <img src={bootstrap} alt=""/>
                    <img src={mongodb} alt=""/>
                    <img src={seo} alt=""/>
                    <img src={html} alt=""/>
                    <img src={css3} alt=""/>
                    
                </div>
            </div>
        </div>
    );
};

export default Icons;