import React, { useState } from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
      <nav className="flex justify-center">
        <ul className="flex space-x-4 md:space-x-8 text-base md:text-2xl font-bold tracking-widest">
          <li><a href="#about" className="hover:text-amber transition-colors">About</a></li>
          <li><a href="#music" className="hover:text-amber transition-colors">Music</a></li>
          <li><a href="#tours" className="hover:text-amber transition-colors">Shows</a></li>
          <li><a href="#contact" className="hover:text-amber transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
