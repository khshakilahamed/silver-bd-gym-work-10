import React from 'react';
import { Link } from 'react-router-dom';

const Package = ({ packAge }) => {
    // console.log(packAge);
    const { id, packageTitle, image, price } = packAge;
    return (
        <div className="col-md-4 my-3 p-3">
            <div className="border shadow rounded">
                <div className="p-2">
                    <img src={image} className="img-fluid rounded" alt="" />
                    <h4>{packageTitle}</h4>
                    <p>$ {price}</p>
                    <Link to={`/package/${id}`}>
                        <button className="btn btn-dark">Enroll Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Package;