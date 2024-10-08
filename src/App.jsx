import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Header-footer-home/Home';
import Courses from './Courses/Courses';
import './App.css'
import Mentor from './components/mentor/Mentor'
import Header from './Header-footer-home/Header';
import Footer from './Header-footer-home/Footer'
import Next from './Courses/nextjs/Next';
import Reactt from './Courses/react/Reactt';
import Javascript from './Courses/js/Javascript';
import Login from './components/authenticat/Login'
import { AuthProvider } from './components/authenticat/Authcontext'; // Adjust the path as needed
function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/courses/next" element={<Next />} />
        <Route path="/courses/react" element={<Reactt />} />
        <Route path="/courses/js" element={<Javascript />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
