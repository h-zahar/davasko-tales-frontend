import React, { useEffect, useState } from 'react';
import Tale from '../Tale/Tale';
import './Tales.css';

const Tales = () => {
    const [featured, setFeatured] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;

    useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
        .then(response => response.json())
        .then(data => {
            setFeatured(data.blogs);
            const taleCount = data.count;
            const pageNumber = Math.ceil(taleCount / size);
            setPageCount(pageNumber);
        })
    },[page]);

    return (
        <div>
            <div id="tales" className="bg-lighdow my-5">
                <h2 className="text-center mt-5 mb-3 pt-5 pb-4">Travelers Tale!</h2>
                <div className="d-flex justify-content-center flex-wrap">
                    {
                        featured.map(info => { return <Tale key={info._id} info={info} />})
                    }
                </div>

                <div className="my-5 d-flex justify-content-center">
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button key={number} onClick={() => setPage(number)} className={number === page ? 'btn-pagination selected mx-2' : 'btn-pagination mx-2'}>{number}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tales;