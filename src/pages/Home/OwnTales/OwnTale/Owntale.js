import React from 'react';

const OwnTale = (props) => {
    const { _id, title, url, category, date, time, location, rating, description, isApproved } = props.myTale;
    const { myTales, setMyTales } = props;

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
                const remaining = myTales.filter(single => single._id !== id);
                setMyTales(remaining);
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    };

    return (
        <div className="col-12 d-flex justify-content-center py-3 mx-2 gy-2">
            <div style={{maxWidth: '900px'}} className="border shadow-lg px-4 py-3">
                {/* <h4>{title}</h4> */}
                <p className="my-3 text-secondary">ID: {_id}</p>
                <div>
                    <p>Rating: {rating}</p>
                    <p>{date} - {time}</p>
                    <p>Category: {category}</p>
                    <p>Location: {location}</p>
                    <div className="d-flex justify-content-center my-5 py-4">
                        <div style={{width: '90%'}}>
                            <img className="w-100" src={url} alt="" />
                        </div>
                        
                    </div>
                    <h4 className="text-center mb-4">{title}</h4>
                    <p>{description}</p>
                </div>
                <div>
                    {
                        !isApproved ?
                        <p className="my-3">Status: <span className="text-danger">Pending</span></p> :
                        <p className="my-3">Status: <span className="text-success">Approved</span></p>
                    }
                </div>
                <div>
                    <button className="ps-0" style={{background: 'none', border: 'none'}} onClick={() => handleDelete(_id)}><span className="text-danger">Cancel?</span></button>
                </div>
            </div>
        </div>
    )
}

export default OwnTale;