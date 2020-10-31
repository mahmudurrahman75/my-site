import React from 'react';
import "./Test.css";
import prj1 from '../../images/prj1.JPG';
import prj2 from '../../images/prj2.JPG';
import prj3 from '../../images/prj3.JPG';
import prj4 from '../../images/prj4.JPG';
import prj8 from '../../images/prj8.JPG';
import prj9 from '../../images/prj9.JPG';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub} from '@fortawesome/free-solid-svg-icons'

import ProjectAnimation from '../ProjectAnimation/ProjectAnimation';
import Navbar from '../Navbar/Navbar';

const Test = () => {
    return (
        <div class="body">
            
            <div class="row test">
                <div class="col-lg-4 col-md-6 ">
                    <div class="card mt-4">
                        <img class="card-img-top" src={prj1} alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">Creative Agency</h4>
                            <p>• It’s a complete responsive single page web application designed with React JS. • A single-page web app with admin panel and customer. • An admin can add services, make new admin & see all services at the dashboard. • Customer can order services, make review & get to know his all • order.</p>
                            <div class="technology mb-4">
                                <span>React</span>
                                <span>React Router</span>
                                <span>Node.js</span>
                                <span>Express JS</span>
                                <span>MongoDB as Database</span>
                                <span>Bootstrap</span>
                                <span>Material UI</span>
                                <span>Firebase</span>
                            </div>
                            <a href="https://github.com/mahmudurrahman75/creative-agency" target="_blank" rel="noopener noreferrer" class="mr-3"><FaGithub size="20px"/>GitHub</a>

                            <a href="https://creative-agency-a43c0.web.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size="20px"/>Live Site</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card mt-4">
                        <img class="card-img-top" src={prj4} alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">volunteer-network</h4>
                            <p>• It’s a complete responsive single page web application designed with React JS. • A single-page web app with dashboard & multiple options of the volunteer event. • User can register as a volunteer & check all registered event .</p>
                            <div class="technology mb-4">
                                <span>React</span>
                                <span>React Router</span>
                                <span>Node.js</span>
                                <span>Express JS</span>
                                <span>MongoDB as Database</span>
                                <span>Bootstrap</span>
                                <span>Material UI</span>
                                <span>Firebase</span>
                            </div>
                            <a href="https://github.com/mahmudurrahman75/volunteer-network" target="_blank" rel="noopener noreferrer" class="mr-3"><FaGithub size="20px"/>GitHub</a>
                            <a href="https://modest-nobel-b4d2ef.netlify.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size="20px"/>Live Site</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card mt-4">
                        <img class="card-img-top" src={prj3} alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">material-ui-assignment</h4>
                            <p>• It’s a complete responsive static website designed with HTML,CSS, Bootstrap, React JS , React Router • When users visit the post detail then they can see this post detail with post comments. • Here showed each post have 5 comments randomly.An admin can see orders add a new service from the dashboard.</p>
                            <div class="technology mb-4">
                                <span>React</span>
                                <span>React Router</span>
                                <span>Bootstrap</span>
                                <span>Material UI</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <a href="https://github.com/mahmudurrahman75/material-ui-assignment" target="_blank" rel="noopener noreferrer" class="mr-3"><FaGithub size="20px"/>GitHub</a>
                            <a href="https://suspicious-mccarthy-5a25cf.netlify.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size="20px"/>Live Site</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card mt-4">
                        <img class="card-img-top" src={prj2} alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">Travel Guru</h4>
                            <p>•This is responsive static website designed with HTML,CSS, Bootstrap, React JS , React Router • When users visit then they see 3 cards • They can select any one of them & visit for booking, then they do Login after that they can be booked • Finally visitor can select there required booking.. An admin can see orders add a new service from the dashboard.</p>
                            <div class="technology mb-4">
                            <span>React</span>
                                <span>React Router</span>
                                <span>Node.js</span>
                                <span>Express JS</span>
                                <span>MongoDB as Database</span>
                                <span>Bootstrap</span>
                                <span>Material UI</span>
                                <span>Firebase</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <a href="https://github.com/tayab-pabel/creative-agency-client" target="_blank" rel="noopener noreferrer" class="mr-3"><FaGithub size="20px"/>GitHub</a>
                            <a href="https://creative-agency-tp.web.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size="20px"/>Live Site</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card mt-4">
                        <img class="card-img-top" src={prj9} alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">E-School-Site</h4>
                            <p>Single page web application with the dashboard. A customer can order and review for service. An admin can see orders add a new service from the dashboard.User can observe the latest condition of their order status.Use simle Bootstrap HTML5 css</p>
                            <div class="technology mb-4">
                                <span>Bootstrap</span>
                                <span>Material UI</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <a href="https://github.com/mahmudurrahman75/e-school-site-final" target="_blank" rel="noopener noreferrer" class="mr-3"><FaGithub size="20px"/>GitHub</a>
                            <a href="https://mahmudurrahman75.github.io/e-school-site-final/index.html" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size="20px"/>Live Site</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="card mt-4">
                        <img class="card-img-top" src={prj8} alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">Panda-Ecommerce-Site</h4>
                            <p>Single page web application with the dashboard. A customer can order and review for service. An admin can see orders add a new service from the dashboard.</p>
                            <div class="technology mb-4">
                                <span>Bootstrap</span>
                                <span>Material UI</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <a href="https://github.com/mahmudurrahman75/panda-ecommerce-site" target="_blank" rel="noopener noreferrer" class="mr-3"><FaGithub size="20px"/>GitHub</a>
                            <a href="https://mahmudurrahman75.github.io/panda-ecommerce-site/index.html#" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size="20px"/>Live Site</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Test;