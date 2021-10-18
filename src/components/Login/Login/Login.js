import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../../images/logo/google.png';
import facebook from '../../../images/logo/facebook.png';
import github from '../../../images/logo/github.png';
import './Login.css'

const Login = () => {

    const [isTrue, setIsTrue] = useState(true);


    return (
        <div className="login-container py-5 text-light text-center">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="login-form">

                        {
                            isTrue ? (
                                <div>
                                    <h2 className="">Login Here</h2>
                                    <form className="pt-3">
                                        <input type="email" name="" id="" placeholder="Email" />
                                        <br />
                                        <input type="password" name="" id="" placeholder="Password" />
                                        <br />
                                    </form>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="">Register Here</h2>
                                    <form className="pt-3">
                                        <input type="text" placeholder="Name" />
                                        <br />
                                        <input type="email" name="" id="" placeholder="Email" />
                                        <br />
                                        <input type="password" name="" id="" placeholder="Password" />
                                        <br />
                                    </form>
                                </div>
                            )
                        }

                        {
                            isTrue ? (
                                <div>
                                    <Link><button className="login-btn my-3 btn btn-light">login</button></Link>
                                    <p ><small>Don't have? <a onClick={() => { setIsTrue(false) }}>Click Here</a></small> </p>
                                </div>
                            ) : (
                                <div>
                                    <Link><button className="login-btn my-3 btn btn-light">Register</button></Link>
                                    <p ><small>Already have? <a onClick={() => { setIsTrue(true) }}>Click Here</a></small> </p>
                                </div>
                            )
                        }

                        <div className="hr-tag">
                            <hr />
                            <p className="or">OR</p>
                        </div>


                        <p>Login with</p>
                        <div>
                            <button className="authentication-btn">
                                <img style={{ width: '40px', height: '40px' }} src={google} alt="" />
                            </button>
                            <button className="authentication-btn">
                                <img style={{ width: '40px', height: '40px' }} src={facebook} alt="" />
                            </button>
                            <button className="authentication-btn">
                                <img style={{ width: '40px', height: '40px' }} src={github} alt="" />
                            </button>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Login;