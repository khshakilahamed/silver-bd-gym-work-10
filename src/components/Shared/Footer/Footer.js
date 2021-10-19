import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="text-light bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <h4 className="text-uppercase mb-3">Silver Gym</h4>
                        <p>Silver Gym is a popular and faithful Gym at Dhaka in Bangladesh. Our slogan is "Build Your Body". To stay fit and healty GYM is the finest and best way. Because in our Gym under a roof you will get huge collection of gym instruments, Experienced Trainer, Heath Consultent, necessery suppliments and so on. SILVER GYM is fully Air Conditining</p>

                        <div>
                            <i className="fab fa-facebook-square fa-2x me-3"></i>
                            <i className="fab fa-twitter-square fa-2x me-3"></i>
                            <i className="fab fa-instagram-square fa-2x me-3"></i>
                            <i className="fab fa-linkedin fa-2x me-3"></i>
                        </div>

                        <p className="mt-3">@ 2021 Silver Gym Designed by Kh. Shakil</p>
                    </div>
                    <div className="col-md-3 mt-3">
                        <h4 className="text-center text-uppercase mb-3">Quick Links</h4>
                        <div className="quick-links text-center">
                            <Link to="/home" className="navItems">Home</Link>
                            <Link to="/packages" className="navItems">Packages</Link>
                            <Link to="/gallery" className="navItems">Gallery</Link>
                            <Link to="/blog" className="navItems">Blog</Link>
                        </div>
                    </div>
                    <div className="col-md-5 mt-3">
                        <h4 className="text-uppercase mb-3">Let us know your Suggestion</h4>
                        <div className="user-feedback-container">
                            <input type="text" placeholder="Name" />
                            <input type="email" name="" id="" placeholder="Email" />
                            <textarea name="" id="" cols="30" rows="5" placeholder="Write your suggestion" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;