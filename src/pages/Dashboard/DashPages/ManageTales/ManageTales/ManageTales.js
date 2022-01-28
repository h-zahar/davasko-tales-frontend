import React, { useEffect, useState } from 'react';
import Header from '../../../../Shared/Header/Header';
import ManageTale from '../ManageTale/ManageTale';

const ManageTales = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-blogs')
        .then(res => res.json())
        .then(data => setAllBlogs(data));
    }, []);
    return (
        <div style={{minHeight: '30.2vh', marginBottom: '30px'}}>
            <Header />
            <h3 className="my-5 text-center">All Tales</h3>
            <div className="container d-flex flex-wrap justify-content-center mt-5">
                {
                    allBlogs.map(blog => {
                        return <ManageTale key={blog._id} blog={blog} allBlogs={allBlogs} setAllBlogs={setAllBlogs} />
                    })
                }
            </div>
        </div>
    )
}

export default ManageTales;