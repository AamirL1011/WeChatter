import React from "react";
import "../../App.css";
import { useAuth0 } from "../../react-auth0-spa";
import LoginBtn from "../../components/Login/LoginBtn";
import Spinner from "react-bootstrap/Spinner";
import IntroAnimation from "../../components/Branding/IntroAnimation";
import LoginForm from "../../components/Login/LoginForm";

const LandingPage = (props) => {

  const { loading, isAuthenticated } = useAuth0();

  if (loading) {
    return <div>
      <br/>
      <br/>
      <Spinner animation="border" variant="warning" />
      Please wait while we are personalizing your settings...
    </div>;
  }

    if (isAuthenticated) {
      setTimeout(() => {
        props.history.push('/home');
      }, 4000);
    }

    return (
      <section className="container">
        <div className={"pageContent"}>
          <div className={"row"}>
            <div className={"col-4 brandLogo"}>
              <br/>
              <br/>
              <br/>
              <br/>
              <img src="WeChatter.png" width="300px" height="400px" alt="" />
              <br/>
              <br/>
            </div>
            <div className={"col-8 brandAnim d-flex justify-content-center align-items-center"}>
              <span>
                <IntroAnimation/>
                <hr id="mottoDiv" />
                <div className="text-light">
                <h2 id={"mottoSpan"}>
                  <span id="motto1">Chat more,</span>
                  <span id="motto2"> together.</span>
                </h2>
              </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <LoginForm/>
              </span>
            </div>
          </div>


        </div>
      </section>
    );
};


export default LandingPage;
