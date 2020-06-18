import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./views/HomePage/Homepage";
import About from "./views/AboutPage/About";
import LandingPage from "./views/LandingPage/LandingPage";
import LoadingPage from "./views/LoginPage/LoadingPage";


class App extends React.Component {

  constructor() {
    super();
    const CALLBACK_PATH = "/implicit/callback";
  }

  render() {
    return (
      <Router>
      <div className="App">
        <br />
        <div className="animationNav">
          <Navbar />
          <Route exact path={"/"} component={Homepage} />
          <Route path={"/landing"} component={LandingPage} />
          <Route path={"/about"} component={About} />
          <Route path={"/loading"} component={LoadingPage} />
        </div>
      </div>
      </Router>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  // name is by convention
  return { isHome: state.isHome }; // now it will appear as props
};

export default connect(mapStateToProps)(App);
