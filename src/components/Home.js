import React from 'react'
import apple from  '../assets/apple.svg'
import google from '../assets/google.svg'

const Home = () => {
  return (
    <section name="home" className='flex w-full h-screen bg-slate-200'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start'>
          <p className='text-2xl'>Use our chat platform.</p>
          <h1 className='py-3 text-5xl font-bold dm:text-7xl' >Chat management</h1>
          <p className='text-2xl'>Discord is the best chat platform.</p>
          <button className='py-4 px-6 my-4 md:w-[60%]'>Get Started</button>
        </div>

        <div className='flex flex-col justify-center px-2'>
          <h2 className='font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>Easily download app
            <br className='hidden sm:block'/> Google & Apple
          </h2>
          <p className='text-[18px] leadeing-[30.8px] max-w-[470px] mt-5'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum sed fugiat optio hic quisquam ipsam molestias deserunt, quidem incidunt ea sit quaerat magnam?
          </p>

          <div className='flex flex-row fles-wrap mt-6 sm:mt-10'>
            <img src={apple} alt="Apple_appstore" className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer' />
            <img src={google} alt="google_playstore" className='w-[144.17px] h-[43.08px] object-contain cursor-pointer' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home