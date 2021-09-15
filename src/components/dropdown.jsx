import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div      className={
      isOpen
        ? 'grid grid-rows-3 text-center items-center' 
        : 'hidden'
    }
    style={{background:"#EEEEEE"}}
    onClick={toggle}>
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
  )
}

export default Dropdown; 
      

