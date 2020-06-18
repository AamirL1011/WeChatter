import React from "react";
import "../../App.css";
import { connect } from "react-redux";

class LandingPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <section className="container">
        <div className={"pageContent"}>
        <br/>
        <br/>
        <div>
          <h3>Future Landing Page after user logs in.</h3>
        </div>
        </div>
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

export default connect(mapStateToProps)(LandingPage);
