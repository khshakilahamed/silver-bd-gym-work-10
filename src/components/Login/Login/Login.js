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


    const { error, handleGoogleLogin, handleFacebookLogin, handleGithubLogin, createUserAccount, loginUsingEmailPassword, handleError, resetPassword } = useAuth();

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
        if (!name) {
            handleError("Please, provide your name");
            return;
        }
        if (!email) {
            handleError("Please, provide your email");
            return;
        }
        if (!password) {
            handleError("Please, provide your password");
            return;
        }
        else {
            createUserAccount(name, email, password);
        }

    }

    const handleLogin = () => {
        loginUsingEmailPassword(email, password);
    }

    const handleResetPassword = () => {
        resetPassword(email)
    }


    return (
        <div>
            <NavBar></NavBar>
            <div className="login-container py-5 text-light text-center">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="login-form">

                            {/* toggle login, register form */}

                            {
                                isTrue ? (
                                    <div>
                                        <h2 className="">Login Here</h2>
                                        <form className="pt-3">
                                            <input onBlur={handleEmail} className="rounded" type="email" name="" id="" placeholder="Email" required />
                                            <br />
                                            <input onBlur={handlePassword} className="rounded" type="password" name="" id="" placeholder="Password" required />
                                            <br />
                                        </form>

                                        {
                                            error && <p className="text-danger">{error}</p>
                                        }
                                        <div className="d-flex ms-2">
                                            <p><small className="text-danger" onClick={() => handleResetPassword()} style={{ cursor: 'pointer' }}>Reset Password?</small></p>
                                        </div>
                                        <button onClick={() => handleLogin()} className="login-btn mb-3 btn btn-light login-register-btn">login</button>
                                        <p ><small>Don't have account? <span style={{ cursor: 'pointer' }} className="text-primary" onClick={() => { setIsTrue(false) }}>Click Here</span></small> </p>

                                    </div>
                                ) : (
                                    <div>
                                        <h2 className="">Register Here</h2>
                                        <form className="pt-3">
                                            <input onBlur={handleName} className="rounded" type="text" placeholder="Name" required />
                                            <br />
                                            <input onBlur={handleEmail} className="rounded" type="email" name="" id="" placeholder="Email" required />
                                            <br />
                                            <input onBlur={handlePassword} className="rounded" type="password" name="" id="" placeholder="Password" required />
                                            <br />
                                        </form>
                                        {
                                            error && <p className="text-danger">{error}</p>
                                        }
                                        <button onClick={() => handleRegister()} className="login-btn my-3 btn btn-light login-register-btn">Register</button>
                                        <p ><small>Already have an account? <span style={{ cursor: 'pointer' }} className="text-primary" onClick={() => { setIsTrue(true) }}>Click Here</span></small> </p>

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
                                    <img onClick={handleGithubLogin} style={{ width: '40px', height: '40px' }} src={github} alt="" />
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