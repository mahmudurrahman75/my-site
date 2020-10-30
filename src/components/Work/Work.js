import React from 'react';
import { Link } from 'react-router-dom';
import './Work.css';
import prj1 from '../../images/prj1.JPG';
import prj2 from '../../images/prj2.JPG';
import prj3 from '../../images/prj3.JPG';
import prj4 from '../../images/prj4.JPG';

const Work = () => {
    return (
        <div className="work">
        <h2 style={{textAlign:"center", marginTop:"50px", marginBottom:"140px", fontSize:"60px", fontWeight:"500",color:"#0653b6"}}>Latest Project</h2>
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            
            <div className="col-md-4 offset-md-1">
                <img src={prj1} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h1 style={{color:"#3E4559"}}>Creative Agency</h1>
                <p className="text-secondary">• It’s a complete responsive single page web application designed with React JS. • A single-page web app with admin panel and customer. • An admin can add services, make new admin & see all services at the dashboard. • Customer can order services, make review & get to know his all • order.</p>

                <Link to="/myProject"><button  style={{backgroundColor:'#2a4b7c', color:'white'}} className="btn">Projects Detail</button></Link>
            </div>

            <div className="col-md-4 offset-md-1">
                <img src={prj2} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h1 style={{color:"#3E4559"}}>Travel Guru</h1>
                <p className="text-secondary">•This is responsive static website designed with HTML,CSS, Bootstrap, React JS , React Router • When users visit then they see 3 cards • They can select any one of them & visit for booking, then they do Login after that they can be booked • Finally visitor can select there required booking.</p>

                <Link to="/myProject"><button  style={{backgroundColor:'#2a4b7c', color:'white'}} className="btn">Projects Detail</button></Link>
            </div>

            <div className="col-md-4 offset-md-1">
                <img src={prj3} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h1 style={{color:"#3E4559"}}>React Material UI</h1>
                <p className="text-secondary">• It’s a complete responsive static website designed with HTML,CSS, Bootstrap, React JS , React Router • When users visit the post detail then they can see this post detail with post comments. • Here showed each post have 5 comments randomly.</p>

                <Link to="/myProject"><button  style={{backgroundColor:'#2a4b7c', color:'white'}} className="btn">Projects Detail</button></Link>
            </div>

            <div className="col-md-4 offset-md-1">
                <img src={prj4} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h1 style={{color:"#3E4559"}}>VolunTeer Network</h1>
                <p className="text-secondary">• It’s a complete responsive single page web application designed with React JS. • A single-page web app with dashboard & multiple options of the volunteer event. • User can register as a volunteer & check all registered event • Admin can add events or delete registered volunteers.</p>

                <Link to="/myProject"><button  style={{backgroundColor:'#2a4b7c', color:'white'}} className="btn">Projects Detail</button></Link>
            </div>
            
        </main>
        </div>
    );
};

export default Work;