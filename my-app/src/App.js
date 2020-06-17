import React from "react";
import "./App.css";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./views/HomePage/Homepage";
import About from "./views/AboutPage/About";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <br />
        <div className="animationNav">
          <Navbar />
          {this.props.isHome.isHome === "true" ? <Homepage /> : <About />};
        </div>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  // name is by convention
  return { isHome: state.isHome }; // now it will appear as props
};

export default connect(mapStateToProps)(App);
