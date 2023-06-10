import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    image: '',
    title: '',
    directorRole:'',
    director: '',
    directorlink: '',
    writerRole: '',
    writer: '',
    writerlink:'',
    description:''
})


  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData((prevPostData) => ({
      ...prevPostData,
      [name] : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/posts/', postData);
      navigate('/works');
      console.log('Post Submitted Successfully');
    } catch (error) {
      console.error('Error sending post data:', error);
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='sm:flex w-[90vw]  sm:w-[65vw] gap-[5vw] mx-auto '>
          <div className='sm:w-[30vw]'>
            <label htmlFor="image" className="block mb-1 text-sm font-medium text-gray-300 w-fit mx-auto">Image Link</label>
            <input
              id='image'
              name='image'
              value={postData.image}
              onChange={handleChange}
              type="text"
              placeholder='www.imagesite.com/image.png'
              className='p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white'
            />
          </div>
          <div className='sm:w-[30vw]'>
            <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-300 w-fit mx-auto">Title of the Work</label>
            <input
              id='title'
              name='title'
              value={postData.title}
              onChange={handleChange}
              type="text"
              placeholder='e.g. Bullet and The Buddha'
              className='p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white'
            />
          </div>
        </div>

        <div className='sm:flex w-[90vw] sm:w-[65vw] gap-[5vw] mx-auto'>
          <div className='sm:w-[30vw]'>
            <label htmlFor="directorRole" className="block mb-1 text-sm font-medium text-gray-300 w-fit mx-auto">Role</label>
            <input
              id='directorRole'
              name='directorRole'
              value={postData.directorRole}
              onChange={handleChange}
              type="text"
              placeholder='e.g. Directed By or Managed By'
              className='p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white'
            />
          </div>
          <div className='sm:w-[30vw]'>
            <label htmlFor="writerRole" className="block mb-1 text-sm font-medium text-gray-300 w-fit mx-auto">Role</label>
            <input
              id='writerRole'
              name='writerRole'
              value={postData.writerRole}
              onChange={handleChange}
              type="text"
              placeholder='e.g. Written By or Organized By'
              className='p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white'
            />
          </div>
        </div>

        <div className='sm:flex w-[90vw] sm:w-[65vw] gap-[5vw] mx-auto'>
          <div className='sm:w-[30vw]'>
            <label htmlFor="directorlink" className="block mb-1 text-sm font-medium text-gray-300 w-fit mx-auto">Social Link of Role: {postData.directorRole}</label>
            <input
              id='directorlink'
              name='directorlink'
              value={postData.directorlink}
              onChange={handleChange}
              type="text"
              placeholder='www.socialmedia.com/username'
              className='p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white'
            />
          </div>
          <div className='sm:w-[30vw]'>
            <label htmlFor="writerlink" className="block mb-1 text-sm font-medium text-gray-300 w-fit mx-auto">Social Link of Role: {postData.writerRole}</label>
            <input
              id='writerlink'
              name='writerlink'
              value={postData.writerlink}
              onChange={handleChange}
              type="text"
              placeholder='www.socialmedia.com/username'
              className='p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white'
            />
          </div>
        </div>

        <div className='sm:flex w-[90vw] sm:w-[65vw] gap-[5vw] mx-auto'>
          <div className='sm:w-[30vw]'>
            <label htmlFor="director" className="block mb-1 text-sm font-medium text-gray-300 w-fit mx-auto">Name of Role: {postData.directorRole}</label>
            <input
              id='director'
              name='director'
              value={postData.director}
              onChange={handleChange}
              type="text"
              placeholder='e.g. Aashant Sharma'
              className='p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white'
            />
          </div>
          <div className='sm:w-[30vw]' >
            <label htmlFor="writer" className="block mb-1 text-sm font-medium text-gray-300 w-fit mx-auto">Name of Role: {postData.writerRole} </label>
            <input
              id='writer'
              name='writer'
              value={postData.writer}
              onChange={handleChange}
              type="text"
              placeholder='www.socialmedia.com/username'
              className='p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white'
            />
          </div>
        </div>

        <div className="sm:w-[50vw] w-[90vw] mx-auto mb-4">
          <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-300 w-fit mx-auto">Description of Work</label>
          <textarea
            id="description"
            name="description"
            value={postData.description}
            onChange={handleChange}
            rows="6"
            className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className='w-full sm:w-[50vw]  mx-auto '>
          <button
            type="submit"
            className="w-full mx-auto py-3 px-5 text-sm font-medium text-center text-white  bg-blue-800 hover:bg-blue-700 rounded-lg"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPost