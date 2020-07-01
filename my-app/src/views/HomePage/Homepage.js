import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import AddMessageForm from "../../components/AddMessage/AddMessageForm";
import MessageFeed from "../../components/Feed/MessageFeed";

class Homepage extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="pageContent">
          <div className="row">
            <div className="col-1" />
            <div className="col-10 d-flex justify-content-center">
              <AddMessageForm />
            </div>
            <div className="col-1" />
          </div>
          <div className="row">
            <div className="col-1" />
            <div className="col-10 d-flex justify-content-center">
              <MessageFeed />
            </div>
            <div className="col-1" />
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
    messages: state.messages.messages,
    popupSeen: state.popupToggle.popPresent,
    popupID: state.popupToggle.popID,
  }; // now it will appear as props
};

export default connect(mapStateToProps)(Homepage);
