import React from "react";
import "../../App.css";
import NavbarItem from "./NavbarItem";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbarCustom" id="navbar">
        <NavbarItem />
      </div>
    );
  }
}

export default Navbar;
