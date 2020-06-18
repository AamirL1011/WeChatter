import React from "react";
import "../../App.css";
import { useAuth0 } from "../../react-auth0-spa";
import LoginBtn from "../../components/Login/LoginBtn";
import Spinner from "react-bootstrap/Spinner";

const LandingPage = () => {

  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (loading) {
    return <div>
      <br/>
      <br/>
      <Spinner animation="border" variant="warning" />
      Loading...
    </div>;
  }


    return (
      <section className="container">
        <div className={"pageContent"}>
        <br/>
        <br/>
        <div>
          {isAuthenticated && (
            <div></div>
          )}
        </div>
          <div className={"row"}>
            <div className={"col d-flex justify-content-center"}>
              <div className={"bg-secondary loginBtnDiv"}>
                <LoginBtn/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};


export default LandingPage;
