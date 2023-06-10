import React from 'react'
import hero from '../assets/hero.png'
import Contact from './Contact'

  const Home = () => {
  
  return (
    <div>
      <h1 className='text-xl sm:text-2xl font-semibold  md:text-4xl text-white  px-12 sm:p-0 w-fit mx-auto mb-16 sm:mt-10 mt-8' ><span className='text-orange-300'>Experience</span> the Magic of <span className='text-orange-300'>Live Theatre</span> and Artistry with :<br /><span className=' text-blue-400 block  w-fit mx-auto  font-serif'>Ways Private Limited.</span></h1>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='md:w-[50vw] md:px-3'>
         
          <p className='text-slate-400 mt-2 p-3 sm:p-0'> Welcome to Ways Private Limited, Nepal's premier destination for exceptional theatre experiences and a catalyst for the thriving Nepali theatre scene. <span className=' hidden sm:block'>We are dedicated to showcasing the magic and artistry of live performances, enriching the cultural landscape of Nepal. With a deep-rooted passion for theatre, our company serves as a platform for aspiring artists, enthusiastic performers, and visionary organizations seeking to bring their artistic visions to life. Whether you're an actor, director, playwright, or event organizer, Ways Private Limited is your trusted companion on the path to success.</span> Our experienced team offers professional guidance, technical expertise, and creative collaborations to ensure your artistic theatrical endeavors leave a lasting impact and to acheive social transformation. Join us in celebrating the rich heritage of Nepali theatre and let us embark on a transformative journey together. {/*<NavLink to="/works" className='bg-blue-200 rounded-lg p-1 text-black'>Explore<i className="fa-solid fa-right-long"></i></NavLink>*/}</p>
        </div>
        <img className='md:w-[50vw] mb-4 -mt-6  rounded-full' src={hero} alt="Dancing" />
      </div>

      <div className='py-6 my-5'>
        <Contact />
      </div>
      
      </div>
  )
}

export default Home