import React from 'react';
import './button.css';

function Button({ icon, name, bgColor = '#000dff', color = '#ffffff' }) {
  return (
    <a className="mainBtn" style={{ color: color, background: bgColor }}>
      {icon} {name}
    </a>
  );
}

export default Button;
