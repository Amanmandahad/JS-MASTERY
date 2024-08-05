import React from 'react';
import './App.css'
import Header from './Header-footer-home/Header';
import Home from './Header-footer-home/Home';
import Footer from './Header-footer-home/Footer';
/* In your main CSS file or component */
const App = () => {
  return (
     <>
      <Header />
      <Home />
      <Footer/>   
    </>
  )
}

export default App
