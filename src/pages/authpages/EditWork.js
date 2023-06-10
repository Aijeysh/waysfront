import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const EditWork = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts/get');
        setPosts(response.data);
      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/posts/delete/${id}`);
      console.log('Post deleted successfully');
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="text-slate-200">
      <div className='sm:grid md:grid-cols-3 gap-6 p-6 sm:grid-cols-2'>
        {posts.map((post) => (
          <div key={post._id} className='mb-6'>
            <img src={post.image} alt="jsdf" />
            <div className='gap-6 flex mt-4'>
              <h1 className='font-semibold p-2 text-blue-700'>{post.title}</h1>
              <NavLink to="/updatepost" state={post} className='bg-blue-600 w-24 mx-auto rounded-lg text-center pt-2'>Update</NavLink>
              <button onClick={() => handleDelete(post._id)} className='bg-red-800 w-24 rounded-lg mx-auto text-center'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditWork;
