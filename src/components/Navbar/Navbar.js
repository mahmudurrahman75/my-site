import React from 'react';
import './Navbar.css';
import { Button, Form, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <p style={{color: "white", fontSize:"18px", marginTop:"7px"}}>Md.Mahmudur Rahman</p>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a style={{color:"#0653b6", fontSize:"19px"}} class="nav-link mr-5" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a style={{color:"#0653b6", fontSize:"19px"}} class="nav-link mr-5" href="/myProject">My Project</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color:"#0653b6", fontSize:"19px"}} class="nav-link mr-5" href="/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color:"#0653b6", fontSize:"19px"}} class="nav-link mr-5" href="/myResume">My Resume</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color:"#0653b6", fontSize:"19px"}} class="nav-link mr-5" href="contactMe">Contact Me</a>
                    </li>
                    <button style={{backgroundColor:'#2A4B7C', color:'white'}} className="load" ><a  href="https://docs.google.com/uc?export=download&id=19BDmH-MGKZEL2MyfWu4BSlJBT3pAy6vg" download target="_blank">Download Resume</a></button>
                    
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;