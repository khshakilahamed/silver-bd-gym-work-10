import React, { useEffect, useState } from 'react';

const Packages = () => {

    const [gymPackage, setGymPackage] = useState({});

    useEffect(() => {
        fetch('/fakePackagesData.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h2>This is packages</h2>
        </div>
    );
};

export default Packages;