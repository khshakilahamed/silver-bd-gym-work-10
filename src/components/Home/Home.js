import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeServicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className="container my-3">
                <h3 className="text-center">Our Services</h3>
                <div className="row">

                    {
                        services.slice(0, 3).map(service => <Service key={service.id} service={service}></Service>)
                    }
                    <div className="text-center">

                        <Link to="/services">
                            <button className="btn btn-primary mb-5">More Services</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;