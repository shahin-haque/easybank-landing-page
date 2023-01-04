import Image from 'next/image';
import React from 'react';
import logo from '../public/logo.svg';
import NavLinks from './NavLinks';
import NavMenuIcon from './NavMenuIcon';

const NavBar = () => {
  return (
    <header className="nav-header">
      <Image src={logo} alt="logo" />
      <NavMenuIcon />
      <nav className="main-nav">
        <NavLinks />
      </nav>
      <button className="btn primaryBtn"> Request Invite</button>
    </header>
  );
};

export default NavBar;
