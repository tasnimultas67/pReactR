import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post
    return (
        <div className='border p-5 rounded-md shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col'>
            <div>
                <h2 className='font-semibold mb-3 text-white'>{title}</h2>
                <p className='text-sm text-slate-100'>{body}</p>
                <Link to={`/post/${id}`} ><button className='mt-5 text-white text-sm'>Read More</button></Link>
            </div>
        </div>
    );
};

export default Post;