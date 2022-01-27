import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import OwnTale from '../OwnTale/Owntale';

const OwnTales = () => {
    const { user } = useAuth();
    const [myTales, setMyTales] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/tales/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyTales(data))
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }, []);

    return (
        <div style={{minHeight: '60vh'}}>
            <div className="container mb-5">
                <h4 className="text-center my-4">My Tales</h4><hr />
                <div className="row">
                    {
                        myTales.map(myTale => {
                            return <OwnTale key={myTale._id} myTale={myTale} myTales={myTales} setMytales={setMyTales} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OwnTales;