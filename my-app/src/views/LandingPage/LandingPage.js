import React from "react";
import "../../App.css";
import Spinner from "react-bootstrap/Spinner";
import { useAuth0 } from "../../react-auth0-spa";
import IntroAnimation from "../../components/Branding/IntroAnimation";
import LoginForm from "../../components/Login/LoginForm";

const LandingPage = (props) => {
  const { loading, isAuthenticated } = useAuth0();

  if (loading) {
    return (
      <div className="loadingDiv">
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="warning" />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <h2>Please wait while we are personalizing your settings...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    setTimeout(() => {
      props.history.push("/home");
    }, 7000);
  }

  return (
    <section className="container">
      <div className="pageContent">
        <div className="row">
          <div className="col-4 brandLogo">
            <br />
            <br />
            <br />
            <br />
            <img src="WeChatter.png" width="300px" height="400px" alt="" />
            <br />
            <br />
          </div>
          <div className="col-8 brandAnim d-flex justify-content-center align-items-center">
            <span>
              <IntroAnimation />
              <hr id="mottoDiv" />
              <div className="text-light">
                <h2 id="mottoSpan">
                  <span id="motto1">Chat more,</span>
                  <span id="motto2"> together.</span>
                </h2>
              </div>
              <br />
              <br />
              <br />
              <br />
              <LoginForm />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
