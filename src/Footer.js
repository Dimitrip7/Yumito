import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='Footer'>
      <p className="Footer-text">&copy; 2023 EtherealSoft. All rights reserved.</p>
      <ul className="Footer-links">
        <li className="Footer-link">
          <Link to='/'>
            Menu
          </Link>
        </li>
        <li className="Footer-link">
          <Link to='/'>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
