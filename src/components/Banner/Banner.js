import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner-1.jpg';
import banner2 from '../../images/banner/banner-2.jpg';
import banner3 from '../../images/banner/banner-3.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Build Muscle, Live Longer</h3>
                    <p>Muscle helps manage blood sugar, Muscle builds strength and stamina. Muscle supports your joints. Building muscle builds bone, too.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div>
                        <h3 >Five benefits of battle ropes training</h3>
                        <p>Blast fat, Sculpt muscles, Increase mobility, Likelihood of injuries is low, Good fun to use</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Leg Exercise</h3>
                    <p>Legs are the pillars for a healthy body and training them should be a top priority for overall physique and health.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;