import React from 'react';
import "./Contact.css";
import pic3 from '../../images/pic3.jpg';
import { MdEmail, MdCall } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="row d-flex align-items-top contact">
            <div className="col-md-2" style={{marginTop:"120px", marginLeft:"50px"}}>
                <p><MdCall/> 01752-xxxxxx</p>
                <p><MdEmail/>  Email:<br/>mahmudurrahmance75@gmail.com</p>
                <p><a href="https://www.linkedin.com/in/md-mahmudur-rahman-8125991ba/" target="_blank"><ImLinkedin/>  LinkedIn</a></p>
                <p><a href="https://github.com/mahmudurrahman75" target="_blank"><FaGithub/>  Github</a></p>
            </div>
            <div className="col-md-8">
            
                <form action="https://formspree.io/f/myybjkeq" method="POST" style={{marginTop:"40px", marginLeft:"280px", marginTop:"100px"}}>
                    <div className="form-group">
                        <input type="text" id="name" name="name" className="form-control" placeholder="Your name *"/>
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group">
                        <textarea id="massage" name="massage" className="form-control" id="" cols="15" rows="7" placeholder="Your Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <input className="btn" style={{backgroundColor:"#111430", color:"#FFFF"}} type="submit" value="send"/>
                        
                    </div>
                </form>
                
       
            </div>
        </div>
    );
};

export default Contact;