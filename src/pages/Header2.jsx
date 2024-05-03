import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header2.css';
import Button from '../components/Button';


function Header2({ scroll }) {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
      <a href="/" className="logo" style={{ marginLeft: '45%' , fontSize: '50px' }}>
        Bojo
      </a>

      <div className="home">
        <Link to="/dashboard">
          <Button
            icon={<ion-icon name="home-outline"></ion-icon>}
            name="Home"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header2;