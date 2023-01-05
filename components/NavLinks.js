import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
  return (
    <div className="links-container">
      <ul className="links-wrapper">
        <li className="link">
          <Link href="/">Home</Link>
        </li>
        <li className="link">
          <Link href="/about">About</Link>
        </li>
        <li className="link">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="link">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="link">
          <Link href="/careers">Careers</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
