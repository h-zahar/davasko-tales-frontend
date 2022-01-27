import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../../Shared/Header/Header';
import OwnTale from '../OwnTale/OwnTale';

const OwnTales = () => {
    const { user } = useAuth();
    const [myTales, setMyTales] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyTales(data))
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }, [user?.email]);

    return (
        <div style={{minHeight: '60vh'}}>
            <Header />
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