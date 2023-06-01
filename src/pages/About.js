import React from 'react'
import ceo from '../assets/waysceo.jpg'

const About = () => {
  return (
    <div className={"absolute mt-24  text-slate-400 "} >
      <div className='mt-8 md:flex  md:flex-row-reverse mb-8'>
        <div className='w-full grid items-center  h-full mx-auto  md:font-medium md:ml-6 p-0'>
          <img src={ceo} className=' h-28 w-24   sm:aspect-auto sm:h-52 sm:w-52  rounded-full' alt="CEO" /><a className='text-blue-300 hover:text-blue-600' href='https://www.facebook.com/aashant.sharma' target='_blank' rel="noreferrer" >Krishna Prasad Pangeni Sharma</a>Ceo, Ways Private Limited</div>
        <h1 className='py-2 pl-4 text-lg  sm:text-2xl tracking-tight'> "If you are seeking transformative experiences, captivating performances, and a celebration of Nepal's cultural heritage, Ways Private stands ready to embrace you. Join us on this exhilarating artistic voyage as we strive to redefine the boundaries of theatre and create a world where creativity and innovation flourish."</h1>
      </div>
      <div className='p-4 font-medium sm:text-sm  md:text-lg sm:tracking-wide ' >
        <h1 className='mx-auto  w-full max-w-fit mb-4'>Ways Private ltd. is a registered art company located in Nepal since 2063 B.S.</h1>
        <div className='flex w-100%  md:w-[80%] p-2 sm:mx-4 md:mx-auto mb-2 flex-wrap'> 
        <p>Krishna Prasad Pangnei Sharma, widely recognized as Aashant Sharma, is a versatile professional in the realm of theatre activism, writing, directing, and acting. With a strong commitment to fostering theatre and arts in Nepal, he took the initiative to establish Ways Private Limited. This dynamic organization is dedicated to preserving the rich culture and art of Nepal by producing and showcasing a wide range of theatrical dramas and plays.
          
          Ways Private goes beyond mere preservation, actively contributing to the development of the arts through creativity and innovation. It serves as an exemplary platform for enthusiasts, professionals, and visionaries who are eager to embark on a transformative journey through the power of creative and innovative arts. At Ways Private, we firmly believe that art possesses the extraordinary potential to shape a better world for all individuals.</p> <br/>
           
             <p> By blending traditional values with contemporary expressions, Ways Private strives to create a vibrant and inclusive theatre scene in Nepal. Our team of passionate individuals works tirelessly to explore new horizons, pushing the boundaries of artistic boundaries and reinventing the theatrical experience. With an unwavering commitment to excellence, Ways Private aims to inspire, entertain, and provoke thought through its captivating productions.

              As we continue our journey, we remain dedicated to providing a nurturing environment for budding artists, offering them a platform to hone their skills and express their unique perspectives. By collaborating with local talents and inviting international collaborations, Ways Private ensures a diverse and culturally rich repertoire that captivates audiences from all walks of life.</p><br/>
        </div>
        </div>
    
    </div>
  )
}

export default About