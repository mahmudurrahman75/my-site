import React from 'react';
import pic3 from '../../images/pic3.jpg';

const Contact = () => {
    return (
        <div>
            <div className="col-md-9">
            
                <form action="https://formspree.io/f/myybjkeq" method="POST" style={{marginTop:"40px", marginLeft:"350px", marginTop:"120px"}}>
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