import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="navbar">
      <nav role="navigation">
          <ul className="navbar__list">
              <li className="navbar__title">
                  <Link to="/">
                    <img className="navbar__handimg" src="../../public/images/hand.png"/>
                  </Link>
                  <Link to="/">
                    <h3>HorrorClub</h3>
                  </Link>
              </li>
              <li className="navbar__title">
                  <p>What movie shall we watch next...?</p>
              </li>
          </ul>
      </nav>
    </header>
  );
}

export default NavBar;