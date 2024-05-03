import React from 'react';
import './navListItem.css';

function NavListItem({ nav, navOnClick }) {
  return (
    <li>
      <a
        href={nav.link}
        onClick={() => navOnClick(nav._id)}
        className={`${nav.active ? 'active' : undefined}`}
      >
        {nav.name === 'home' ? (
          <ion-icon name="home-outline"></ion-icon>
        ) : (
          nav.name
        )}
      </a>
    </li>
  );
}

export default NavListItem;
