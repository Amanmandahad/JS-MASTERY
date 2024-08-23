import React from 'react';
import style from './Header.module.css';
import logo from '../assets/jsm-logo (1).svg';
import { useNavigate, useLocation } from "react-router-dom";
import { MdArrowUpward } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithRedirect ,user, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();


  const homepage = () => {
    navigate('/');
  };

  const isHomePage = location.pathname === '/';
   

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isHomePage && (
        <header className={style.container}>
          <div className={style.contain}>
            <div className={style.image}>
              <img src={logo} alt="Company Logo" onClick={homepage} />
            </div>
          {isAuthenticated &&(
          <h1 className='text-blue-500'> Welcome {user.name}</h1>
          )}


            <div className={style.btn}>
            {
              isAuthenticated ?
              (
                <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={style.normal}>Logout</button>
              )
              :
             (
              <button onClick={loginWithRedirect} className={style.normal}>Login / Signin</button>
             )
            }
                         
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
