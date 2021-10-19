import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('/fakePackagesData.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <div className="container my-4">
                <h2 className="text-center">Packages</h2>
                <div className="row p-3">
                    {
                        packages.map(packAge => <Package
                            key={packAge.id}
                            packAge={packAge}
                        ></Package>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Packages;