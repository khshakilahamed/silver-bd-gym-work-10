import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import aboutImage from '../../images/about.jpg'

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-6">
                        <img src={aboutImage} className="img-fluid w-100" alt="" />
                    </div>
                    <div className="col-md-6 px-4">
                        <h2 className="text-uppercase mb-5">About Silver Gym</h2>
                        <p style={{ color: 'hsl(93, 41%, 46%)', fontWeight: 'bold' }} >We have found the best workouts from around the world and put them in one database that you can search by days per week, type of program, and much more!</p>
                        <p className="fw-light">
                            Many workouts accomplish different goals at the same time. For example, a muscle building workout will almost always help build strength at the same time. Choose the goal that is MOST important to you, and the workouts that are shown will be geared more toward your chosen goal.
                        </p>
                        <p className="fw-light">
                            A Split Bodypart Routine means that you work different body parts on different days. For example, one workout might have you work biceps and chest on one day, then triceps and back on a different day. This is the most common type of workout program.
                        </p>
                        <br />
                        <h1 className="fs-1 fw-light text-uppercase mt-5">your success is <br /> our passion!</h1>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;