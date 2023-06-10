import React from 'react'
import ceo from '../assets/waysceo.jpg'

const About = () => {
  return (
    <div className={" w-full  text-slate-400 "} >
      <div className='mt-8 md:flex   md:flex-row-reverse mb-6'>
        <div className='md:w-[40vw] w-[80vw] sm:grid  items-center  h-full mx-auto  md:font-medium md:ml-24 p-0'>
          <img src={ceo} className=' h-28 w-24  mx-auto  sm:aspect-auto sm:h-52 sm:w-52  rounded-full' alt="CEO" /><a className='text-blue-300 hover:text-blue-600 block w-fit relative  mx-auto' href='https://www.facebook.com/aashant.sharma' target='_blank' rel="noreferrer" >
            <span className='ml-8'>Krishna Prasad Pangeni Sharma </span><br /> <span className='ml-8'> a.k.a. Aashant Sharma<br /> <span className='ml-8'>Ceo: Ways Private Limited</span></span></a></div>
        <h1 className=' md:w-[60vw] py-2 md:pl-16 pl-4 text-lg  sm:text-2xl tracking-tight text-gray-500'> "If you are seeking transformative experiences, captivating performances, and a celebration of Nepal's cultural heritage, Ways Private stands ready to embrace you. Join us on this exhilarating artistic voyage as we strive to redefine the boundaries of theatre and create a world where creativity and innovation flourish."</h1>
      </div>
      <div className='p-4 font-medium sm:text-sm md:text-lg sm:tracking-tight'>
        <h1 className='mx-auto w-[100vw] max-w-fit mb-4 md:text-2xl text-xl'>Welcome to Ways Private Ltd: Nurturing Art and Culture in Nepal</h1>
        <div className=' w-100% md:w-[80%] sm:p-2 sm:mx-4 md:mx-auto mb-2  font-serif'>
          <p>Krishna Prasad Pangnei Sharma, widely acclaimed as Aashant Sharma, is a multifaceted artist known for his theatrical activism, writing, directing, and acting prowess. Driven by a deep-rooted commitment to promote and nurture the arts in Nepal, he founded Ways Private Limited. This esteemed organization endeavors to safeguard Nepal's rich cultural heritage by producing and presenting an array of captivating theatrical dramas and plays.</p>
          <br />
          <p>Ways Private goes beyond preservation, embracing creativity and innovation to shape the future of the arts. It provides an exceptional platform for enthusiasts, professionals, and visionaries who seek to embark on a transformative journey through the power of creative and innovative arts. At Ways Private, we firmly believe that art has the extraordinary potential to shape a better world for all.</p>
          <br />
          <p>By blending traditional values with contemporary expressions, Ways Private strives to create a vibrant and inclusive theatre scene in Nepal. Our dedicated team of passionate individuals works tirelessly to explore new horizons, push artistic boundaries, and redefine the theatrical experience. With unwavering commitment to excellence, Ways Private aims to inspire, entertain, and provoke thought through its captivating productions.</p>
          <br />
          <p>As we continue our journey, we remain steadfast in providing a nurturing environment for budding artists, offering them a platform to hone their skills and express their unique perspectives. By fostering collaborations with local talents and inviting international partnerships, Ways Private ensures a diverse and culturally rich repertoire that captivates audiences from all walks of life.</p>
          <br />
          <p> We possess a unique expertise in creating compelling TV commercials (TVCs), public service announcements (PSAs), and various other forms of advertisement. If your company or organization is seeking a partner to elevate your brand through visually stunning and impactful campaigns, Ways Private is your go-to destination.</p><br />

          <p>Furthermore, we are actively seeking collaborations with theatre and art projects, offering our professional expertise to help them shine. Whether it's providing creative insights, technical support, or strategic guidance, we are dedicated to fostering a thriving artistic community and nurturing emerging talent.</p><br />

          <p>With our unwavering passion and commitment, Ways Private Limited is at the forefront of revolutionizing the theatre and art sector. Join us on this exhilarating journey as we work tirelessly to bring you exceptional projects, thought-provoking performances, and groundbreaking innovations.</p>
        </div>
      </div>
    </div>
  )
}

export default About