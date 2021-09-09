import React from "react";
import Header from "./header";
import Dropdown from "./dropdown";
import Footer from "./footer";
import { useState,useEffect } from "react";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  
  return (
    <div>
      <Header toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <div>{props.children}</div>
      <Footer/>
    </div>
  )
}

export default Layout; 
