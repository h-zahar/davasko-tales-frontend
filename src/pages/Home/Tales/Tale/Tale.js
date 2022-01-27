import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
// import './Tale.css';

const Tale = (props) => {
    const { _id, url, title, rating, description } = props.info;
    let slice = description.slice(0, 50);
    
    return (
        <div>
            <Link style={{color: 'unset', textDecoration: 'none'}} className="mx-3 mt-3">
                <Card className="border-0 shadow rounded" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={url} style={{ height: '10rem', borderBottom: '1px solid #93969e' }} />
                    <Card.Body>
                        <Card.Title className="text-hover mt-3 mb-4">{title}</Card.Title>
                            <Card.Text>
                            <Rating
                            emptySymbol="fa-regular fa-star"
                            fullSymbol="fa-solid fa-star"
                            initialRating={rating} 
                            readonly 
                            /><span className="ms-2 text-details">{rating}</span>
                            <div><p className="my-3" style={{maxWidth: '30ch', overflow: 'hidden'}}>{slice}...</p></div>
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default Tale;