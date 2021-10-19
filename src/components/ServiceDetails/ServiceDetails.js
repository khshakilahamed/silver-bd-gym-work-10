import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const ServiceDetails = () => {
    const { id } = useParams();

    const [services, setServices] = useState([]);
    const [matchedService, setMatchedService] = useState({});

    const { packageTitle, packageDuration, classDuration, price, image, packageDescriptions } = matchedService || {};

    useEffect(() => {
        fetch('/fakeServicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    useEffect(() => {
        const matched = services.find(service => service.id == id);
        setMatchedService(matched);
    }, [services]);



    console.log(packageDescriptions)
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6 ">
                        <div>
                            <img className="w-100" src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div>
                            <h2>{packageTitle}</h2>
                            <p>{price}</p>
                            <p><i className="fab fa-discourse"> <span className="ms-2 me-2">{packageDuration}</span> </i></p>
                            <p><i className="fab fa-discourse"> <span className="ms-2">{classDuration}</span> </i></p>

                            <h4>Package Includes:</h4>
                            {
                                packageDescriptions?.map(description => <p><i class="fas fa-check me-3"></i>{description}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;