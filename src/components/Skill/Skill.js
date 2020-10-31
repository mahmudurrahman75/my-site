import React, { useState } from 'react';
import "./Skill.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'

const Skill = () => {


    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })



    return (
        <div style={{height:"430px", backgroundColor:"#111a28"}} class="sk">


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


            <div class="row skill">
                <div class="col-lg-4 col-md-6 ">
                    <div class="mt-4">
                        <div class="bod">
                            <ul>
                                <li>JavaScript</li><br/>
                                <li>React</li><br/>
                                <li>Node</li><br/>
                                <li>Express</li><br/>
                                <li>Material UI</li><br/>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 ">
                    <div class="mt-4">
                        <div class="bod">
                            <ul>
                                <li>Bootstrap</li><br/>
                                <li>MongoDB</li><br/>
                                <li>SEO</li><br/>
                                <li>HTML</li><br/>
                                <li>CSS</li><br/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Skill;