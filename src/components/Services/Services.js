import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeServicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div >
            <NavBar></NavBar>
            <div className="container">
                <h3 className="text-center mt-3">Our Services</h3>
                <div className="row mb-4">
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;