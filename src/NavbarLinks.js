import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavbarLinks({ isLoggedIn, handleLogout }) {
  return (
    <ul className="app__navbar-links">
      {!isLoggedIn && (
        <li className="app__navbar-link">
          <NavLink exact to="/" activeClassName="active">
            Menu
          </NavLink>
        </li>
      )}
      {isLoggedIn ? (
        <>
          <li className="app__navbar-link">
            <Link to="/">Welcome</Link>
          </li>
          <li className="app__navbar-link">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="app__navbar-link">
            <button className="logButton" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <li className="app__navbar-link">
          <Link className="logButton" to="/login">
            Login
          </Link>
        </li>
      )}
    </ul>
  );
}

export default NavbarLinks;
