import { useState } from 'react';
import Image from 'next/image';

import hamburger from '../public/icon-hamburger.svg';
import closeHamburger from '../public/icon-close.svg';

const NavMenuIcon = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <button
      className="menuIcon"
      aria-controls="Primary-Navigation"
      aria-expanded={isNavOpen}
    >
      {isNavOpen ? (
        <Image
          onClick={() => setIsNavOpen(!isNavOpen)}
          src={closeHamburger}
          alt="icon-menu"
        />
      ) : (
        <Image
          onClick={() => setIsNavOpen(!isNavOpen)}
          src={hamburger}
          alt="icon-menu"
        />
      )}
    </button>
  );
};

export default NavMenuIcon;
