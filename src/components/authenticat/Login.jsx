import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase functions
import {  doSignInWithGoogle, doSignOut } from '../../components/firebase/Auth';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [state,setstate] = useState({
    email: '',
    password: '',
    username: '',
  })

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);


const handlechange=(e)=>{
  const { name, value } = e.target;
  setstate({
    ...state,
    [name]: value
  });
}

  const handleEmailLogin =  () => {
    navigate('/') 
   setstate({
    email:'',
    password: '',
    username: '',
   })
  };

  const handleGoogleLogin = async () => {
    try {
      await doSignInWithGoogle();
      setIsAuthenticated(true);
      setShowLoginForm(false);
      navigate('/');
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await doSignOut();
      setIsAuthenticated(false);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        {isAuthenticated ? (
          <button className={styles.logoutButton} onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <>
            <button
              className={styles.loginButton}
              onClick={() => setShowLoginForm(!showLoginForm)}
            >
              {showLoginForm ? 'Close' : 'Login'}
            </button>
            {showLoginForm && (
              <div className={styles.loginForm}>
                <input
                  type="email"
                  placeholder="Enter your Email Address..."
                  value={state.email}
                  name='email'
                  onChange={handlechange}
                  className={styles.inputField}
                />
                 <input
                  type="text"
                  placeholder="Enter your Name..."
                  value={state.username}
                  name='username'
                  onChange={handlechange}
                  className={styles.inputField}
                />
                <input
                  type="password"
                  placeholder=" Enter your Password..."
                  value={state.password}
                  name='password'

                  onChange={handlechange}
                  className={styles.inputField}
                />
                <button
                  className={styles.emailLoginButton}
                  onClick={handleEmailLogin}
                >
                  Login with Username
                </button>
                <button
                  className={styles.googleLoginButton}
                  onClick={handleGoogleLogin}
                >
                  Login with Google
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
