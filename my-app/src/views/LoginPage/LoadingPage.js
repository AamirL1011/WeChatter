import React from "react";
import "../../App.css";

const LoadingPage = (props) => {

  setTimeout(() => {
      props.history.push("/landing");
    }, 5000);

    return (
      <section className="container">
        <div>
          <br/>
          <br/>
          <h6>Page user sees right after logging in, redirected from Auth0</h6>
        </div>
      </section>
    );

}


export default LoadingPage;
