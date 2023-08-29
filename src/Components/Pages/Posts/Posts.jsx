import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <div className='text-center mt-5'>
                <h1 className='text-2xl font-semibold'>{posts.length} Lates Posts</h1>
            </div>
            <div className='grid grid-cols-4 gap-5 w-11/12 m-auto mt-5'>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;