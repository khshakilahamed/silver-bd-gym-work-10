import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, packageTitle, packageDuration, classDuration, image } = service;
    return (
        <div className="col-md-4 col-12 my-3 py-2 shadow">
            <div className="border rounded ">
                <div className="p-2">
                    <img className="w-100 rounded" src={image} alt="" />
                    <div >
                        <h3>{packageTitle}</h3>
                        <div>
                            <i className="fab fa-discourse"> <span className="ms-2 me-2">{packageDuration}</span> </i>
                            <i className="fab fa-discourse"> <span className="ms-2">{classDuration}</span> </i>
                        </div>
                        <Link to={`/service/${id}`}>
                            <button className="btn btn-dark mt-4 mb-2">More Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;