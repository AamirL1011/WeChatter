import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import { changePageState } from "../../actions";

class NavbarItem extends React.Component {
  changeToHome = (e) => {
    this.props.changePageState(true);
  };

  changeToAbout = (e) => {
    this.props.changePageState(false);
  };

  render() {
    return (
      <ul className="nav">
        <li onClick={this.changeToHome}>
          <a className="brand">WeChatter 1.0 Alpha</a>
        </li>
        <li onClick={this.changeToHome}>
          <a className="activePage">Home</a>
        </li>
        <li onClick={this.changeToAbout}>
          <a>About</a>
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
