import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, packageTitle, packageDuration, classDuration, image } = service;
    return (
        <div className="col-md-4 col-12 my-3 py-2 ">
            <div className="border shadow rounded cards-container">
                <div className="p-2">
                    <img className="w-100 rounded" src={image} alt="" />
                    <div >
                        <h4 className="my-3">{packageTitle}</h4>
                        <div>
                            <i className="fab fa-discourse"> <span className="ms-2 me-2">{packageDuration}</span> </i>
                            <i className="fab fa-discourse"> <span className="ms-2">{classDuration}</span> </i>
                        </div>
                        <Link to={`/service/${id}`}>
                            <button className="btn btn-dark mt-4 mb-2 shadow regular-btn">More Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;