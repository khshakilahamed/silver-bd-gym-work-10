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

    console.log(packageTitle);

    useEffect(() => {
        fetch('/fakePackagesData.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);


    useEffect(() => {
        const matched = packages.find(packAge => packAge.id == id);
        console.log(matched);
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
                        <h2> You have enrolled:  {packageTitle}</h2>
                        <h1 style={{}}>Thank You</h1>
                        <Link to="/home"><button className="btn btn-dark my-5">Back to Home</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PackageEnroll;