import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Works = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://ways-service.onrender.com/api/posts/get');
        setLoading(false);
        setPosts(response.data);
      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const loadingPost = () => (
    <div className="w-[80vw] mx-auto overflow-hidden bg-gray-700 flex flex-col items-center justify-center mt-8">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-b-blue-500 border-t-blue-300 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl font-semibold">Works Loading...</h2>
      <p className="text-center text-white">
        This may take a few seconds, please don't close this page. If this is taking unusual time then, there might have been some error, please come back later to watch our works. Sorry for your inconvenience.
      </p>
      <NavLink to='/home' className={'w-fit h-12 p-3 bg-blue-600 hover:bg-blue-800 rounded-lg text-center text-white font-semibold mt-3'}>Return Home</NavLink>
    </div>
  );

  return (
    <div className="text-slate-200">
      <p className='md:w-[80vw] mx-auto sm:text-lg sm:font-mono tracking-tighter  sm:mt-8 p-6 md:p-0'>
        We, Ways pride ourselves on our diverse portfolio, encompassing a range of exceptional plays, events, social works and productions, all meticulously crafted by our talented team.
      </p>
      {loading && loadingPost()}
      <div className='sm:grid md:grid-cols-3 gap-6 p-6 sm:grid-cols-2'>
        {!loading && posts.map((post) => (
          <div key={post._id} className='mb-6 mx-auto'>
            <img src={post.image} alt="jsdf" className='w-96 h-64 rounded-lg mx-auto' />
            <h1 className='font-semibold mx-auto w-fit py-2 text-blue-500'>{post.title}</h1>
            <div className='flex gap-8 xl:w-96 mx-auto'>
              <p className='font-serif text-orange-200 '>{post.directorRole} By:<a href={post.directorlink} target='_blank' rel="noreferrer" className='hover:text-blue-300 text-blue-200 xl:w-44'> {post.director}</a></p>
              <p className='font-serif text-orange-200 '>{post.writerRole} By:<a href={post.writerlink} target='_blank' rel="noreferrer" className=' text-blue-300 hover:text-blue-400 xl:w-44'> {post.writer}</a></p>
            </div>
            <p className='text-slate-300 xl:w-96  py-4'>{post.description}</p>
          </div>
        ))}
      </div>

      <div className='sm:p-6 p-2'>
        <p>
          At Ways Private, we take full ownership of our creative endeavors, working diligently to bring our vision to life. As we continue to push boundaries and redefine artistic expression, we are excited to announce our foray into the realm of feature films. With some projects in the pipeline, we are on the path to expand our reach and leave an indelible mark on the silver screen.
        </p>
      </div>
    </div>
  );
};

export default Works;
