import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const EditTale = () => {
    const objectId = useParams();
    const { id } = objectId;

    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [rating, setRating] = useState(0);

    const [oldTale, setOldTale] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/single/${id}`)
        .then(res => res.json())
        .then(data => setOldTale(data));
    }, []);

    const onSubmit = data => {

        data.isApproved = oldTale.isApproved;
        data.traveler_email = oldTale.traveler_email;
        data.traveler = oldTale.traveler;
        data.rating = rating;

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.acknowledged) {
                reset();
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
        console.log(data);
    };

    return (
        <div>
            <Header />
            
            {
                oldTale?._id &&
                <div>
                    <div style={{minHeight: '45vh'}} className="d-flex justify-content-center">
                        <form style={{width: '700px', minWidth: '280px'}} className="d-flex flex-column custom-form mx-md-5 mx-3 p-5 shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="text-center mb-3 mt-4 pt-3">Tell your Tale :D</h4>
                            <p className="border-top mt-3 pt-3 mb-2 text-center fs-4">Rate!</p>
                            <Rating className="text-center mb-4 fs-5"
                                    initialRating={oldTale.rating}
                                    emptySymbol="fa-regular fa-star"
                                    fullSymbol="fa-solid fa-star"
                                    fractions={4}
                                    onChange={(rate) => setRating(rate)}
                                />

                            <input className="my-2" type="date" {...register("date", { required: true })} />
                            {errors.date && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" type="time" {...register("time", { required: true})} />
                            {errors.time && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" type="text" placeholder="Location" {...register("location", { required: true})} />
                            {errors.location && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Image URL" {...register("url", { required: true })} />
                            {errors.url && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Title" {...register("title", { required: true})} />
                            {errors.title && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Category" {...register("category", { required: true})} />
                            {errors.category && <span className="mb-2 text-danger">Something's not correct</span>}

                            <textarea rows={16} className="my-2" placeholder="Description" {...register("description", { required: true })} />
                            {errors.description && <span className="mb-2 text-danger">Something's not correct</span>}

                            {/* <input type="file" className="my-2" placeholder="Image URL" {...register("url", { required: true })} />
                            {errors.img_i && <span className="mb-2 text-danger">Something's not correct</span>} */}
                            <button type="submit" value="Submit" className='btn btn-custom-2 my-2 py-2'>Update</button>
                        
                        </form> 
                    </div>
                </div>
            }

        </div>
    )
}

export default EditTale;