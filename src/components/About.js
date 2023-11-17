import React from 'react'

const About = () => {
  return (
    <section name="about" className='w-full h-screen'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>About this company</h2>
          <p className='py-6 text-3xl text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <p className='mt-20 text-xl'>
          Suscipit eius, explicabo quidem totam tempore et sit blanditiis, tempora alias ad mollitia voluptatem nisi ipsum labore non, impedit dolor voluptates fugit?
        </p>

        <p className='mt-20 text-xl'>
          Suscipit eius, explicabo quidem totam tempore et sit blanditiis, tempora alias ad mollitia voluptatem nisi ipsum labore non, impedit dolor voluptates fugit?
        </p>
      </div>
    </section>
  )
}

export default About