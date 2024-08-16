import React, { useState } from 'react';
import style from './Header.module.css';
import logo from '../assets/header.logo.webp';
import { useNavigate, useLocation } from "react-router-dom";
import { MdArrowUpward } from "react-icons/md";

const scrollup = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const homepage = () => {
    navigate('/');
  };

  const isHomePage = location.pathname === '/';

  return (
    <>

   
{isHomePage && (
         <header className={style.container}>
         <div className={style.contain}>
           <div className={style.image}>
             <img src={logo} alt="Company Logo" onClick={homepage} />
           </div>
           
           <div className={style.btn}>
             <button className={style.normal}>Sign in</button>
             <button className={style.normal}>Sign out</button>
             
           </div>
         </div>
       </header>
      )}




    

      {isHomePage && (
        <div className={style.down}>
          <button onClick={scrollup}>
            <MdArrowUpward className={style.icon} />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;

