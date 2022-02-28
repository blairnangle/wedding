import React, { useEffect, useState } from 'react';
import { Link} from 'gatsby';
import Burger from './Burger';
import Navigation from './Navigation';
import { HeaderStyles } from '../styles/NavStyles';

function Header({ Logo }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <HeaderStyles>
      <div className="logo-cont">
        <Link to="/">
          <img src={Logo} alt="Blair & Helena" />
        </Link>
      </div>
      <Burger />
      <Navigation />
    </HeaderStyles>
  );
}

export default Header;
