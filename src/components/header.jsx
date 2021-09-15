import React from "react";
import { Link } from "react-router-dom";


const Header = ({ toggle }) => {
  return (
    <nav className='flex justify-between items-center h-20 bg-white text-white relative shadow-sm font-dosis' role='navigation' style={{background:"#0F1108"}}>
      <Link to="/">
        <div className='pl-8 cursor-pointer'>
          <h1 className="text-3xl font-bold">MD</h1>
        </div>
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  hidden font-dosis'>
        <Link to='/about' className='p-4'>
          About
        </Link>
        <Link to='/contact' className='p-4'>
          Contact
        </Link>
        <Link to='/' className='p-4'>
          Photography
        </Link>
      </div>
  </nav>
  )
}

export default Header; 