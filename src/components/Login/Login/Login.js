import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../../images/logo/google.png';
import facebook from '../../../images/logo/facebook.png';
import github from '../../../images/logo/github.png';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';


const Login = () => {

    const [isTrue, setIsTrue] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { error, handleGoogleLogin, handleFacebookLogin, createUserAccount, loginUsingEmailPassword } = useAuth();

    // console.log(user);

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleRegister = () => {
        createUserAccount(name, email, password);
    }

    const handleLogin = () => {
        loginUsingEmailPassword(email, password);
    }


    return (
        <div>
            <NavBar></NavBar>
            <div className="login-container py-5 text-light text-center">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="login-form">

                            {/* toggle login register form */}

                            {
                                isTrue ? (
                                    <div>
                                        <h2 className="">Login Here</h2>
                                        <form className="pt-3">
                                            <input onBlur={handleEmail} type="email" name="" id="" placeholder="Email" required />
                                            <br />
                                            <input onBlur={handlePassword} type="password" name="" id="" placeholder="Password" required />
                                            <br />
                                        </form>

                                        {
                                            error && <p className="text-danger">{error}</p>
                                        }
                                        <button onClick={() => handleLogin()} className="login-btn my-3 btn btn-light">login</button>
                                        <p ><small>Don't have? <span style={{ cursor: 'pointer' }} className="text-primary" onClick={() => { setIsTrue(false) }}>Click Here</span></small> </p>

                                    </div>
                                ) : (
                                    <div>
                                        <h2 className="">Register Here</h2>
                                        <form className="pt-3">
                                            <input onBlur={handleName} type="text" placeholder="Name" required />
                                            <br />
                                            <input onBlur={handleEmail} type="email" name="" id="" placeholder="Email" required />
                                            <br />
                                            <input onBlur={handlePassword} type="password" name="" id="" placeholder="Password" required />
                                            <br />
                                        </form>

                                        <button onClick={() => handleRegister()} className="login-btn my-3 btn btn-light">Register</button>
                                        <p ><small>Already have? <span style={{ cursor: 'pointer' }} className="text-primary" onClick={() => { setIsTrue(true) }}>Click Here</span></small> </p>

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
                                    <img onClick={handleGoogleLogin} style={{ width: '40px', height: '40px' }} src={google} alt="" />
                                </button>
                                <button className="authentication-btn">
                                    <img onClick={handleFacebookLogin} style={{ width: '40px', height: '40px' }} src={facebook} alt="" />
                                </button>
                                <button className="authentication-btn">
                                    <img style={{ width: '40px', height: '40px' }} src={github} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;