import React, { useState } from 'react';
import style from './Header.module.css';
import logo from '../assets/jsm-logo (1).svg';
import { useNavigate, useLocation } from "react-router-dom";
import { MdArrowUpward } from "react-icons/md";
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doSignOut } from '../components/firebase/Auth';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    try {
      if (email && password) {
        await doSignInWithEmailAndPassword(email, password);
      } else {
        await doSignInWithGoogle();
      }
      setIsAuthenticated(true);
      setShowLoginForm(false);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = async () => {
    try {
      await doSignOut();
      setIsAuthenticated(false);
      navigate('/'); // Redirect to homepage after logout
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

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
                <button className={style.normal} onClick={handleLogout}>Logout</button>
              ) : (
                <>
                  <button className={style.normal} onClick={() => setShowLoginForm(true)}>Login</button>
                  {showLoginForm && (
                    <div className={style.loginForm}>
                      <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        className={style.input}
                      />
                      <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        className={style.input}
                      />
                      <button className={style.normal} onClick={handleLogin}>Login with Email</button>
                      <button className={style.normal} onClick={handleLogin}>Login with Google</button>
                    </div>
                  )}
                </>
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
