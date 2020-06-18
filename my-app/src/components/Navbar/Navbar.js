import React from "react";
import "../../App.css";
import NavbarItem from "./NavbarItem";

class Navbar extends React.Component {
  // renders a list of Navbar Items
  render() {
    return (
      <div className="navbarCustom" id="navbar">
        <NavbarItem />
      </div>
    );
  }
}

export default Navbar;
