import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { title, body } = postDetails
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className='text-center mt-5'>
            <h2 className='font-semibold text-2xl'>{title}</h2>
            <p className='text-slate-700 max-w-2xl m-auto'>{body}</p>
            <button onClick={handleBack} className='mt-5 border borderblue-600 py-2 px-6 bg-blue-600 text-white rounded shadow'>Back</button>
        </div>
    );
};

export default PostDetails;