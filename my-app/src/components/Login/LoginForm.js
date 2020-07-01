import React from "react";
import "../../App.css";
import "../Branding/Branding.css";
import Spinner from "react-bootstrap/Spinner";
import LoginBtn from "./LoginBtn";
import { useAuth0 } from "../../react-auth0-spa";

const LoginForm = (props) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          {!isAuthenticated && (
            <div className="text-light">
              <h1>Let's Get Started!</h1>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="bg-secondary loginBtnDiv">
            <LoginBtn />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col d-flex justify-content-center">
          {isAuthenticated && (
            <div className="text-light">
              <h1>You will be redirected shortly.</h1>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          {isAuthenticated && (
            <div className="text-light">
              <Spinner animation="border" variant="warning" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
