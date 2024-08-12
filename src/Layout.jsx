// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header-footer-home/Header';
import Footer from './Header-footer-home/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This will render the child routes */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
