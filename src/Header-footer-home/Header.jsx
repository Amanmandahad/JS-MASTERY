import React, { useState } from 'react';
import style from './Header.module.css';
import logo from '../assets/header.logo.webp';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className={style.container}>
        <div className={style.contain}>
          <div className={style.image}>
            <img src={logo} alt="Company Logo" />
          </div>

          <div className={`${style.btn} ${menuOpen ? style.menuOpen : ''}`}>
            <button className={style.sigma}>New sigma batch</button>
            <button className={style.normal}>Sign in</button>
            <button className={style.normal}>Sign out</button>
          </div>

          <button className={style.menuToggle} onClick={toggleMenu}>
          ☰
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

