import React from "react";
import "../../App.css";
import { useAuth0 } from "../../react-auth0-spa";
import LoginBtn from "../../components/Login/LoginBtn";
import Spinner from "react-bootstrap/Spinner";

const LandingPage = (props) => {

  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (loading) {
    return <div>
      <br/>
      <br/>
      <Spinner animation="border" variant="warning" />
      Loading...
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={"row"}>
          <div className={"col d-flex justify-content-center"}>
            {!isAuthenticated && (
              <div className={"text-light"}>
                <h1>Please Log In</h1>
              </div>
            )}
          </div>
        </div>
          <div className={"row"}>
            <div className={"col d-flex justify-content-center"}>
              <div className={"bg-secondary loginBtnDiv"}>
                <LoginBtn/>
              </div>
            </div>
          </div>
          <br/>
          <div className={"row"}>
            <div className={"col d-flex justify-content-center"}>
              {isAuthenticated && (
                <div className={"text-light"}>
                  <h1>You will be redirected shortly.</h1>
                </div>
              )}
            </div>
          </div>
          <div className={"row"}>
            <div className={"col d-flex justify-content-center"}>
              {isAuthenticated && (
                <div className={"text-light"}>
                  <Spinner animation="border" variant="warning" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
};


export default LandingPage;
