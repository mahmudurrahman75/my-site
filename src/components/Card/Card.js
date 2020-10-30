import React from 'react';
import "./Card.css";
import prj1 from '../../images/prj1.JPG';
import prj5 from '../../images/prj5.JPG';
import prj6 from '../../images/prj6.JPG';
import prj7 from '../../images/prj7.JPG';

const Card = () => {
    return (
        <div className="services-container mt-5" style={{ height: "400px" }} class="crd">
            
            <div  className="d-flex justify-content-center" >
            <div className=" row mt-5 pt-5">
                <div className="col-md-3 text-center serviceBd">
                    <img src={prj5} alt=""/>
                    <p>Ema-John(E-commerce site)</p>
                </div>
                <div className="col-md-3 text-center serviceBd">
                    <img src={prj6} alt=""/>
                    <p>Doctors Portal site</p>
                </div>
                <div className="col-md-3 text-center serviceBd">
                    <img src={prj7} alt=""/>
                    <p>Red Onion</p>
                </div>

            </div>
            
        </div>
        </div>
    );
};

export default Card;