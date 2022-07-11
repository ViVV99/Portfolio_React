import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import './index.scss';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function MenuBar() {
  const [isMenuActive, setIsMenuActive] = useState(true);

  return (
    <>
      <nav className="nav-menu">
        <ul className={isMenuActive && 'active' + ' animate__animated animate__bounce'}>
          <div
            className="menu-icon"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            {!isMenuActive && <FontAwesomeIcon icon={faBars} />}
            {isMenuActive && <FontAwesomeIcon icon={faXmark} />}
          </div>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/cachorro'}>Sobre</NavLink>
          </li>
          <li>
            <NavLink to={'/gato'}>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuBar;
