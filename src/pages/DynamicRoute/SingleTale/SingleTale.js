import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const SingleTale = () => {
    const id = useParams();
    const [single, setSingle] = useState({});
    useEffect(() => {
        fetch(`https://api-davaskotales.herokuapp.com/single/${id.id}`)
        .then(res => res.json())
        .then(data => setSingle(data));
    }, [id]);
    return (
        <div style={{minHeight: '70vh'}}>
            <Header />
            {
                single?._id &&
                <div style={{marginTop: '20px', marginBottom: '50px'}} className="row">
                    <div className="col-12 d-flex justify-content-center py-3 mx-2 gy-2">
                        <div style={{maxWidth: '900px'}} className="border shadow-lg px-4 py-3">
                            {/* <h4>{title}</h4> */}
                            <p className="my-3 text-secondary">ID: {single?._id}</p>
                            <div>
                                <p>Rating: {single?.rating}</p>
                                <p>{single?.date} - {single?.time}</p>
                                <p>Category: {single?.category}</p>
                                <p>Location: {single?.location}</p>
                                <div className="d-flex justify-content-center my-5 py-4">
                                    <div style={{width: '90%'}}>
                                        <img className="w-100" src={single?.url} alt="" />
                                    </div>
                                    
                                </div>
                                <h4 className="text-center mb-4">{single?.title}</h4>
                                <p>{single?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SingleTale;