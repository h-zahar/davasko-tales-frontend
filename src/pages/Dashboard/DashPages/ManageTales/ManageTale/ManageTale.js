import React from 'react';

const ManageTale = (props) => {
    const { blog } = props;
    const { _id, title, location, traveler_email, traveler, date, time, description, isApproved } = props.blog;
    const { allBlogs, setAllBlogs } = props;

    const handleApproval = (id) => {
        fetch(`http://localhost:5000/blogs`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(data => {
            blog.isApproved = data.isApproved;
            const updated = allBlogs.map(single => {
                if (single._id === id) {
                    single.isApproved = blog.isApproved;
                    return single;
                }
                else {
                    return single;
                }
            })
            setAllBlogs(updated);
        })
        .catch(error => { 
            // if(error) {
            //     window.location.reload();
            // }
         });
    };

    const handleDelete = (id) => {
        if(!window.confirm('Are you sure to cancel?')) {
            return;
        }
        fetch(`http://localhost:5000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplplication/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount === 1) {
                const remaining = allBlogs.filter(single => single._id !== id);
                setAllBlogs(remaining);
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }

    return (
        <div>
            <div style={{border: '1px solid rgba(0, 0, 0, 0.5)'}} className="px-3 py-4 mx-1 my-2">
                <p>1. ID: <span className="text-primary">{_id}</span></p>
                <p>2. Email: <span className="text-primary">{traveler_email}</span></p>
                <p>3. Traveler: {traveler}</p>
                <p>4. Location: {location}</p> 
                <p>5. Date-Time: {date} | {time}</p>
                <p>7. Title: {title}</p>
                <p style={{width: '70ch'}}>6. Description: {description}</p>
                <p>8. {
                    !isApproved &&
                    <button style={{background: 'none', border: 'none'}} onClick={() => handleApproval(_id)}><span className="text-danger">Pending</span></button>
                }
                {
                    isApproved &&
                    <button style={{background: 'none', border: 'none'}}><span className="text-success" onClick={() => handleApproval(_id)}>Approved</span></button>
                }</p>
                <p>9. <button style={{background: 'none', border: 'none'}}><span className="text-danger" onClick={() => handleDelete(_id)}>Cancel?</span></button></p>
            </div>
        </div>
    )
}

export default ManageTale;