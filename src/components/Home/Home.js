import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import GymBenefits from '../GymBenefits/GymBenefits';
import GymTrainers from '../GymTrainers/GymTrainers';
import Package from '../Package/Package';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './Home.css'

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeServicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('/fakePackagesData.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])


    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <GymBenefits></GymBenefits>


            {/* services */}
            <div className="container my-3">
                <h3 className="text-center">Our Services</h3>
                <div className="row">
                    {
                        services.slice(0, 3).map(service => <Service key={service.id} service={service}></Service>)
                    }
                    <div className="text-center">

                        <Link to="/services">
                            <button className="btn btn-primary my-4 shadow component-btn">More Services</button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* packages */}
            <div className="container">
                <h2 className="text-center">Packages</h2>
                <div className="row">
                    {
                        packages.slice(0, 3).map(packAge => <Package
                            key={packAge.id}
                            packAge={packAge}
                        ></Package>)
                    }
                </div>
                <div className="text-center mt-2 mb-5">
                    <Link to="/packages">
                        <button className="btn btn-primary shadow component-btn">More Packages</button>
                    </Link>
                </div>
            </div>


            <GymTrainers></GymTrainers>
            <Footer></Footer>
        </div>
    );
};

export default Home;