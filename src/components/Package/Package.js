import React from 'react';
import { Link } from 'react-router-dom';

const Package = ({ packAge }) => {
    // console.log(packAge);
    const { id, packageTitle, image, price } = packAge;
    return (
        <div className="col-md-4 my-3 py-2">
            <div className="border shadow rounded cards-container">
                <div className="p-2">
                    <img src={image} className="img-fluid rounded" alt="" />
                    <h4 className="my-3">{packageTitle}</h4>
                    <p>$ {price}</p>
                    <Link to={`/package/${id}`}>
                        <button className="btn btn-dark shadow regular-btn my-2">Enroll Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Package;