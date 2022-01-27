import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import './Header.css';
// import logo from '../../../logo.svg';

const Header = () => {
    const { user, logOut, isLoading } = useAuth();
    
    return (
        <div style={{position: 'sticky', top: '0', backgroundColor: 'rgba(255, 255, 255, 0.6)', zIndex: '2'}} >
            <Navbar style={{backgroundColor: 'rgba(0, 0, 0, 0.1)', zIndex: '2'}} className="py-3" collapseOnSelect expand="md">
                <Container>
                <Navbar.Brand as={NavLink} exact to="/">
                    {/* <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top rounded-circle"
                    />{' '} */}
                    DavaskoTales</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                            {
                                user?.email &&
                                <Nav.Link as={NavLink} exact to="/orders">Orders</Nav.Link>
                            }

                            {
                                user?.email &&
                                <Nav.Link as={NavLink} exact to="/manage">Manage</Nav.Link>
                            }

                            {
                                user?.email &&
                                <Nav.Link as={NavLink} exact to="/add">Add</Nav.Link>
                            }

                            {
                                user?.email &&
                                <div>
                                    <p className="mx-0 my-2 px-2 text-success"><span>{user?.displayName}</span></p>
                                </div>
                            }
                        
                            {
                                (!isLoading && user?.email) &&
                                <button className="rounded" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', border: '1px solid rgba(0, 0, 0, 0.33)', marginLeft: '1rem', marginRight: '1rem'}} onClick={logOut} className="btn-logout">Logout</button>
                            }

                            {
                                (!isLoading && !user?.email) &&
                                <Nav.Link as={NavLink} exact to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;