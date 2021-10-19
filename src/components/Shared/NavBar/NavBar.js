import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../hooks/useFirebase';

import './NavBar.css'

const NavBar = () => {

    const { user, handleLogout } = useFirebase();

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
                                <Link to="/gallery" className="navItems">Gallery</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/blog" className="navItems">Blog</Link>
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#pricing" className="navItems">About us</Nav.Link>
                        </Nav>

                        {
                            user?.email && (<Navbar.Text className="text-light">Hello, {user?.displayName}</Navbar.Text>)
                        }

                        {
                            user?.email ? (
                                <button onClick={handleLogout} className="btn btn-light">logout</button>
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