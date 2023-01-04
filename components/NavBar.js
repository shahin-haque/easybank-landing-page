import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/logo.svg';
import NavLinks from './NavLinks';
import NavMenuIcon from './NavMenuIcon';

const NavBar = () => {
  return (
    <header className="nav-header">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <NavMenuIcon />
      <nav className="main-nav">
        <NavLinks />
      </nav>
      <button className="btn primaryBtn"> Request Invite</button>
    </header>
  );
};

export default NavBar;
