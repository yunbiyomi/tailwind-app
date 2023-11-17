import { FaCheck } from 'react-icons/fa'
import React from 'react'

const Feature = () => {
  return (
    <section name='feature' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Features</h2>
        <p className='py-8 text-2xl text text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>
        
        <div className='grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='flex'>
          <FaCheck className='mt-1 mr-3 text-blue-500 w-7' />
          <div>
            <h3 className='text-lg font-bold'>Real-Time</h3>
            <p className='pt-2 pb-4 text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.
            </p>
          </div>
        </div>

        <div className='flex'>
          <FaCheck className='mt-1 mr-3 text-blue-500 w-7' />
          <div>
            <h3 className='text-lg font-bold'>Real-Time</h3>
            <p className='pt-2 pb-4 text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.
            </p>
          </div>
        </div>

        <div className='flex'>
          <FaCheck className='mt-1 mr-3 text-blue-500 w-7' />
          <div>
            <h3 className='text-lg font-bold'>Real-Time</h3>
            <p className='pt-2 pb-4 text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.
            </p>
          </div>
        </div>

        <div className='flex'>
          <FaCheck className='mt-1 mr-3 text-blue-500 w-7' />
          <div>
            <h3 className='text-lg font-bold'>Real-Time</h3>
            <p className='pt-2 pb-4 text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Feature