import React from "react";
import "../../App.css";
import { connect } from "react-redux";

class LoginPage extends React.Component {
  render() {
    return (
      <section className="container">
        Future Login Page (integration with Auth0 or Okta)
      </section>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  // name is by convention
  return {

  }; // now it will appear as props
};

export default connect(mapStateToProps)(LoginPage);
