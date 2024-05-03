import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import NavListItem from '../components/NavListItem';
import Button from '../components/Button';
import navListData from '../data/navListData';

function Header({ scroll }) {
  const [navList, setNavList] = useState(navListData);
  const [open, setOpen] = useState(false);

  const handleNavOnClick = id => {
    const newNavList = navList.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });

    setNavList(newNavList);
  };

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
      <a href="/" className="logo">
        Bojo
      </a>

      {open ? (
        <a className="menu" onClick={handleToggleMenu}>
          <ion-icon name="close-outline"></ion-icon>
        </a>
      ) : (
        <a className="menu" onClick={handleToggleMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </a>
      )}

      <ul className={`nav-mobile ${open ? 'active' : undefined}`}>
        {navList.map(nav => (
          <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))}
        <li>
          <Button
            icon={<ion-icon name="log-in-outline"></ion-icon>}
            name="Sign in"
          />
        </li>
      </ul>

      <ul className="nav">
        {navList.map(nav => (
          <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))}
      </ul>
      <div className="login">
        <Link to="/catalog">
        <Button
          icon={<ion-icon name="book-outline"></ion-icon>}
          name="Movie Catalog"
        />

        </Link>
      </div>
    </header>
  );
}

export default Header;



