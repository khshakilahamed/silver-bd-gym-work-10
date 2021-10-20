import React from 'react';
import { Link } from 'react-router-dom';
import gymImage from '../../images/gymImage.jpg'

const GymBenefits = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center my-5 ">Benefits of Gym</h2>
            <div className="row shadow border">
                <div className="col-md-6">
                    <img className="img-fluid" src={gymImage} alt="" />
                </div>
                <div className="col-md-6 py-3">
                    <h5>Exercise is defined as any movement that makes your muscles work and requires your body to burn calories.</h5>
                    <p><i className="fas fa-check me-3"></i>Exercise controls weight.</p>
                    <p><i className="fas fa-check me-3"></i>Exercise can help prevent excess weight gain or help maintain weight loss.</p>
                    <p><i className="fas fa-check me-3"></i>Exercise improves mood.</p>
                    <p><i className="fas fa-check me-3"></i>Exercise boosts energy.</p>
                    <p><i className="fas fa-check me-3"></i>Exercise promotes better sleep.</p>
                    <p><i className="fas fa-check me-3"></i>Exercise puts the spark back into your sex life.</p>

                    <Link to="/blogs">
                        <button className="btn btn-dark mt-4 shadow regular-btn">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GymBenefits;