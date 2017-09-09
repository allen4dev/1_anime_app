import React from 'react';

import Logo from './../Logo';
import Navigation from './../Navigation';
import Search from './../Search';

import './index.css';

function Header() {
  return (
    <header className="Header container">
      <div className="Header-main">
        <Logo />
        <Navigation />
      </div>
      
      <Search />
    </header>
  );
}

export default Header;
