import React, { useContext } from 'react';
import { BurgerStyles } from '../styles/NavStyles';
import MenuContext from './MenuContext';

function Burger() {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav((isNavOpen) => !isNavOpen);
  };

  return (
    <BurgerStyles
      onClick={toggleNav}
      type="button"
      className={isOpen ? 'open' : 'closed'}
    >
      Menu
      <div>
        <span />
        <span />
        <span />
      </div>
    </BurgerStyles>
  );
}

export default Burger;
