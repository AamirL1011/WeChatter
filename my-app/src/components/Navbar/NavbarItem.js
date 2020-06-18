import React from "react";
import "../../App.css";
import { Link, NavLink } from 'react-router-dom';
import Profile from "../UserProfile/Profile";
import { useAuth0 } from "../../react-auth0-spa";

const NavbarItem = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
      <ul className="nav">
        <li>
          <NavLink exact={true} to={"/"} className="brand">WeChatter 1.0 Alpha</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          )}
          {isAuthenticated && (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          )}
        {isAuthenticated && (
          <li>
            <NavLink exact={true} to="/" onClick={() => logout()}>Log Out</NavLink>
          </li>
        )}
      </ul>
    );
};


export default NavbarItem;
