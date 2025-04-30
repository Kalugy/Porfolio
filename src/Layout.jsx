import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

export default function Layout() {


  return (
    <div className={`text-base md:text-lg`}>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div>
        <Outlet /> {/* Dynamic content goes here */}
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
