import React from 'react';
import style from './Header.module.css';
import logo from '../assets/jsm-logo (1).svg';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useLocation } from "react-router-dom";
import { MdArrowUpward } from "react-icons/md";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

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
            <div className={style.btn}>
              {isAuthenticated ? (
                <button className={style.normal} onClick={() => logout({ returnTo: window.location.origin })}>
                  Log out
                </button>
              ) : (
                <button className={style.normal} onClick={() => loginWithRedirect()}>
                  Login
                </button>
              )}
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
