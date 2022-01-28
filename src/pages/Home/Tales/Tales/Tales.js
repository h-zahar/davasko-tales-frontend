import React, { useEffect, useState } from 'react';
import Tale from '../Tale/Tale';

const FeaturedServices = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(response => response.json())
        .then(data => setFeatured(data))
    },[]);

    return (
        <div>
            <div id="tales" className="bg-lighdow my-5">
                <h2 className="text-center mt-5 mb-3 pt-5 pb-4">Travelers Tale!</h2>
                <div className="d-flex justify-content-center flex-wrap">
                    {
                        featured.map(info => { return <Tale key={info._id} info={info} />})
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedServices;