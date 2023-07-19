import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuLinks() {
  return (
    <ul className="app__navbar-menu">
      <li>
        <NavLink exact to="/pizza" activeClassName="active">
          Pizza
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/pasta" activeClassName="active">
          Pasta
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/burgers" activeClassName="active">
          Burgers
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/pancakes" activeClassName="active">
          Pancakes
        </NavLink>
      </li>
    </ul>
  );
}

export default MenuLinks;
