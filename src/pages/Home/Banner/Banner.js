import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div style={{background: 'rgba(0, 0, 0, 0.8)'}}>
            <Carousel style={{width: '100%', opacity: '1'}} fade controls={false}>
                <Carousel.Item interval={8000} style={{transition: 'all 2s ease-in-out', background: `rgba(0, 0, 0, 0.75) url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container style={{minHeight: '505px'}} className="text-light d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <p className="mb-0">We call all the travelers, Davasko!</p>
                            <h1 className="mt-5 mb-4">Welcome to <span className="brand">DavaskoTales</span></h1>
                            <p>Your Travel Blog Sharing Platform</p>
                            <Link style={{textDecoration: 'unset', color: 'unset'}} to="/#tales"><button className="my-4 btn-explore rounded">Read Tales!</button></Link>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={8000} style={{transition: 'all 2s ease-in-out', background: `rgba(0, 0, 0, 0.75) url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container style={{minHeight: '505px'}} className="text-light d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <p className="mb-0">Fell free to spell your tales :3</p>
                            <h1 className="mt-5 mb-4">Welcome to <span className="brand">DavaskoTales</span></h1>
                            <p>Your Travel Blog Sharing Platform</p>
                            <Link style={{textDecoration: 'unset', color: 'unset'}} to="/#tales"><button className="my-4 btn-explore rounded">Read Tales</button></Link>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={8000} style={{transition: 'all 2s ease-in-out', background: `rgba(0, 0, 0, 0.75) url('https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60') center center fixed`, backgroundSize: 'cover', backgroundBlendMode: 'darken', borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                    <Container style={{minHeight: '505px'}} className="text-light d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <p className="mb-0">Travel through davasko's tales :D</p>
                            <h1 className="mt-5 mb-4">Welcome to <span className="brand">DavaskoTales</span></h1>
                            <p>Your Travel Blog Sharing Platform</p>
                            <Link style={{textDecoration: 'unset', color: 'unset'}} to="/#tales"><button className="my-4 btn-explore rounded">Read Tales</button></Link>
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;