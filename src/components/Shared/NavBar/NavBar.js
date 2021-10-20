import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

import './NavBar.css'

const NavBar = () => {

    const { user, handleLogout } = useAuth();


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark py-4" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className="text-uppercase">
                        <span style={{ fontSize: '30px', fontWeight: 'bold' }}> Silver Gym</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto ">
                            <Nav.Link >
                                <Link to="/home" className="navItems">Home</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/services" className="navItems">Services</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/packages" className="navItems">Packages</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/blogs" className="navItems">Blogs</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/about" className="navItems">About</Link>
                            </Nav.Link>
                            {/* <Nav.Link as={HashLink} to="/home#pricing" className="navItems">About us</Nav.Link> */}
                        </Nav>

                        {
                            user?.displayName && (<Navbar.Text className="text-light">Hello, {user?.displayName}</Navbar.Text>)
                        }

                        {
                            user?.displayName ? (
                                <button onClick={handleLogout} className="btn btn-light ms-2">logout</button>
                            ) : (
                                <>

                                    <Nav.Link >
                                        <Link to="/login">
                                            <button className="btn btn-light">Login</button>
                                        </Link>
                                    </Nav.Link>
                                </>
                            )
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;