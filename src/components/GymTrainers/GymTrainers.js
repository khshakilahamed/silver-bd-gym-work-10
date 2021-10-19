import React from 'react';
import trainer1 from '../../images/trainers/gymTrainer1.jpg';
import trainer2 from '../../images/trainers/gymTrainer2.jpg';
import trainer3 from '../../images/trainers/gymTrainer3.png';
import trainer4 from '../../images/trainers/gymTrainer4.jpg';
import './GymTrainers.css';

const GymTrainers = () => {
    return (
        <div className="my-4">
            <hr />
            <div className="container">
                <h2 className="text-center my-5">Our Trainers</h2>
                <div className="row trainer text-center">
                    <div className="col-md-3 ">
                        <img src={trainer1} alt="" />
                        <h4 className="my-3">Robert Hook</h4>
                    </div>
                    <div className="col-md-3">
                        <img src={trainer2} alt="" />
                        <h4 className="my-3">John Pitter</h4>
                    </div>
                    <div className="col-md-3">
                        <img src={trainer3} alt="" />
                        <h4 className="my-3">Daniel Mark</h4>
                    </div>
                    <div className="col-md-3">
                        <img src={trainer4} alt="" />
                        <h4 className="my-3">Anthony Joshua</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GymTrainers;