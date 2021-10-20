import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const PackageEnroll = () => {
    const { id } = useParams();

    const [packages, setPackages] = useState([]);
    const [matchedPackages, setMatchedPackages] = useState({});

    const { packageTitle, image } = matchedPackages || {};

    // console.log(packageTitle);

    useEffect(() => {
        fetch('/fakePackagesData.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);


    useEffect(() => {
        const matched = packages.find(packAge => packAge.id == id);
        // console.log(matched);
        setMatchedPackages(matched);
    }, [packages]);

    return (
        <div>
            <NavBar></NavBar>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-lighter text-uppercase" style={{ color: 'hsl(93, 41%, 46%)' }}>Package: {packageTitle}</h2>
                        <h2 className="text-uppercase fw-light my-3"> You have <br /> Successfully enrolled</h2>
                        <h2 className="my-5 text-uppercase fw-light">Thank You</h2>
                        <Link to="/home"><button className="btn btn-dark my-5 regular-btn">Back to Home</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PackageEnroll;