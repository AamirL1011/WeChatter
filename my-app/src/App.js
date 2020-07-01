import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./views/HomePage/Homepage";
import About from "./views/AboutPage/About";
import LandingPage from "./views/LandingPage/LandingPage";
import Switch from "react-bootstrap/cjs/Switch";
import Profile from "./views/ProfilePage/Profile";
import history from "./utils/history";

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <div className="animationNav">
          <div className="row">
            <div className="col navDiv">
              <Navbar />
            </div>
          </div>
          <div className="row views">
            <div className="col">
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/home" component={Homepage} />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
