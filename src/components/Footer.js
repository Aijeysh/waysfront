import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <div className=' mt-8 p-6 bg-[#282B2D] md:flex  text-slate-300 footerBorder  '>
      <div className='flex-col md:ml-6 md:w-[30vw]'>
        <h1 className='text-white text-xl p-2'>Contact :</h1>
        <p className='text-lg p-2'><i className="fa-solid fa-location text-orange-500 text-2xl"></i> <span className='p-2 ml-1'></span>Bardaghat-3, Nawalparasi West, Nepal</p>
        <p className='text-lg p-2'><i className="fa-solid fa-phone text-orange-500 text-2x"></i> <span className='p-2 ml-1'></span>+977-9849868920</p>
        <p className='text-lg p-2'><i className="fa-solid fa-envelope text-orange-500 text-2x"></i><span className='p-2 ml-1'></span>wayskrisaashant@gmail.com</p>
      </div>
      <div className=' flex-col md:ml-6 md:w-[30vw]'>
        <h1 className='text-white text-xl p-2'>Social Networks :</h1>
        <a href='https://www.facebook.com/aashant.sharma' target='_blank' rel="noreferrer" className='text-lg block p-2 hover:text-blue-700'><i className="fa-brands fa-facebook text-orange-500 text-2x"></i> <span className='p-2 ml-1'></span>aashantsharma</a>
        <a href='https://www.youtube.com/@wayspvtltd6249' target='_blank' rel="noreferrer" className='text-lg block p-2 hover:text-blue-700'><i className="fa-brands fa-youtube text-orange-500 text-2x"></i> <span className='p-2 ml-1'></span>Ways pvt ltd</a>
      </div>
      <div className='flex-col md:w-[40vw] md:mt-0 mt-4'>
        <div className='flex'>
          <img src={process.env.PUBLIC_URL + '/wayslogo.jpeg'} alt="logo" className='h-24 w-28' />
          <div className='flex-col md:font-medium px-2 md:ml-2'>
            <h1 className='md:text-3xl text-xl'>Ways Private Limited</h1>

            <p >"Ways Private Limited, driven by a passion for cultural diversity, aims to use the medium of artistic expression to unite and celebrate our society's rich cultural heritage."</p>
          </div>
        </div>
      </div>
      <div className='md:absolute bottom-4 right-16 md:mt-0 mt-2'>
        <h1>&#123;Website Developed & Designed By : <a href='https://np.linkedin.com/in/aijeysh-sharma' target='_blank' rel="noreferrer" className='text-blue-400 hover:text-blue-700'>Aijeysh Sharma&#125;</a></h1>
      </div>
      </div>
      </div>
  )
}

export default Footer