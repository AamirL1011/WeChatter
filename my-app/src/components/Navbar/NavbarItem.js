import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import { changePageState } from "../../actions";

class NavbarItem extends React.Component {

  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink to={"/landing"} className="brand">WeChatter 1.0 Alpha</NavLink>
        </li>
        <li>
          <NavLink exact={"/"} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  // name is by convention
  return { isHome: state.isHome }; // now it will appear as props
};

export default connect(mapStateToProps, { changePageState })(NavbarItem);
