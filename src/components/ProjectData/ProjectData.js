import React from 'react';
import './ProjectData.css';
import prj1 from '../../images/prj1.JPG';
import prj2 from '../../images/prj2.JPG';
import prj3 from '../../images/prj3.JPG';
import prj4 from '../../images/prj4.JPG';
import { Link } from 'react-router-dom';
import ProjectAnimation from '../ProjectAnimation/ProjectAnimation';

const ProjectData = () => {
    return (
        <div>
            <ProjectAnimation></ProjectAnimation>
            <div className="work">
                {/* <h2 style={{textAlign:"center", marginTop:"40px", marginBottom:"50px"}}>Latest Project</h2> */}
                <main style={{height: '600px'}} className="row d-flex align-items-center">
                    
                    <div className="col-md-4 offset-md-1">
                        <img src={prj1} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h2 style={{color:"#3E4559"}}>Project Name: creative-agency</h2>
                        {/* <h3>Project Detail:</h3> */}
                        <p className="text-secondary">• It’s a complete responsive single page web application designed with React JS. • A single-page web app with admin panel and customer. • An admin can add services, make new admin & see all services at the dashboard. • Customer can order services, make review & get to know his all • order.</p>
                        <h5>Tools & Technologies:</h5>
                        <ul>
                            <li>javascript (87.5%)</li>
                            <li>React JS</li>
                            <li>Node JS</li>
                            <li>Express JS</li>
                            <li>MongoDB</li>
                            <li>Bootstrap</li>
                            <li>Material UI</li>
                            <li>Firebase</li>
                            <li>HTML (3.4%)</li>
                            <li>CSS (9.1%)</li>
                        </ul>
                        <a href="">Visit Live Site</a>
                    </div>

                    <div className="col-md-4 offset-md-1">
                        <img src={prj2} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h1 style={{color:"#3E4559"}}>Project Name: Travel Guru</h1>
                        <p className="text-secondary">•This is responsive static website designed with HTML,CSS, Bootstrap, React JS , React Router • When users visit then they see 3 cards • They can select any one of them & visit for booking, then they do Login after that they can be booked • Finally visitor can select there required booking.</p>
                        <h5>Tools & Technologies:</h5>
                        <ul>
                            <li>javascript</li>
                            <li>React JS</li>
                            <li>React Router</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>

                        <Link to="" target="_blank"><button  style={{backgroundColor:'orange', color:'white'}} className="btn">Other Projects</button></Link>
                    </div>

                    <div className="col-md-4 offset-md-1">
                        <img src={prj3} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h2 style={{color:"#3E4559"}}>Project Name: material-ui</h2>
                        {/* <h3>Project Detail</h3> */}
                        <p className="text-secondary">• It’s a complete responsive static website designed with HTML,CSS, Bootstrap, React JS , React Router • When users visit the post detail then they can see this post detail with post comments. • Here showed each post have 5 comments randomly</p>
                        <h5>Tools & Technologies:</h5>
                        <ul>
                            <li>javascript</li>
                            <li>React JS</li>
                            <li>React Router</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>

                        
                    </div>

                    <div className="col-md-4 offset-md-1">
                        <img src={prj4} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h1 style={{color:"#3E4559"}}>Project Name: volunteer-network</h1>
                        
                        <p className="text-secondary">• It’s a complete responsive single page web application designed with React JS. • A single-page web app with dashboard & multiple options of the volunteer event. • User can register as a volunteer & check all registered event • Admin can add events or delete registered volunteers.</p>
                        <h5>Tools & Technologies:</h5>
                        <ul>
                            <li>javascript (76.7%)</li>
                            <li>React JS</li>
                            <li>Node JS</li>
                            <li>Express JS</li>
                            <li>MongoDB</li>
                            <li>Bootstrap</li>
                            <li>Material UI</li>
                            <li>Firebase</li>
                            <li>HTML (6.1%)</li>
                            <li>CSS (17.2%)</li>
                        </ul>
                        <a href="modest-nobel-b4d2ef.netlify.app" target="_blank">Visit Live Site</a>
                        <p><a href="modest-nobel-b4d2ef.netlify.app" target="_blank">Visit Live Site</a></p>
                        
                    </div>
                    
                </main>
            </div>
        </div>
    );
};

export default ProjectData;