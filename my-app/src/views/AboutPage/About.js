import React from "react";
import "../../App.css";
import { connect } from "react-redux";

class About extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="pageContent">
          <div id="about" className="container-div">
            <br />
            <br />
            <h2>About the Developer</h2>
            <div className="msgFeed">
              <p>Hi! I am a 3rd year computer science student.</p>
              <p>
                This is a React web app where you can post the latest chatter!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  // name is by convention
  return { messages: state.messages.messages }; // now it will appear as props
};

export default connect(mapStateToProps)(About);
