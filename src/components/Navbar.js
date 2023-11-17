import React, { useState } from 'react'
import { FaTimes, FaAlignJustify } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [openToggle, setOpenToggle] = useState(false);

  return (
    <nav className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='flex items-center justify-between w-full h-full px-10'>
        <div className='flex items-center'>
          <h1 className='mr-4 text-3xl font-bold sm:text-4xl'>Discord</h1>
          <ul className='hidden md:flex'>
            <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} duration={500}>About</Link></li>
            <li><Link to='support' smooth={true} duration={500}>Support</Link></li>
            <li><Link to='feature' smooth={true} duration={500}>Feature</Link></li>
            <li><Link to='feedback' smooth={true} duration={500}>Feedback</Link></li>
          </ul>
        </div>
        <div className='hidden pr-4 md:flex'>
          <button className='mr-4 text-slate-600 bg-transparent border-none'>Sing In</button>
          <button className='px-8 py-3'>Sing Up</button>
        </div>
        <div className='mr-4 md:hidden cursor-pointer' onClick={() => setOpenToggle(!openToggle)}>
          { openToggle ? <FaTimes /> : <FaAlignJustify />}
        </div>
      </div>
      <ul className={openToggle ? 'absolute bg-zinc-200 w-full px-8' : 'hidden'}>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setOpenToggle(false)} to='home' smooth={true} duration={500}>Home</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setOpenToggle(false)} to='about' smooth={true} duration={500}>About</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setOpenToggle(false)} to='support' smooth={true} duration={500}>Support</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setOpenToggle(false)} to='feature' smooth={true} duration={500}>Feature</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setOpenToggle(false)} to='feedback' smooth={true} duration={500}>Feedback</Link></li>
        <div  className='flex flex-col my-4'>
          <button className='px-8 py-3 mb-4 text-slate-600 bg-transparent'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar