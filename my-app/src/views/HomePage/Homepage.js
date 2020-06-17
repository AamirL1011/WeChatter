import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import AddMessageForm from "../../components/AddMessage/AddMessageForm";
import MessageFeed from "../../components/Feed/MessageFeed";
import DetailedView from "../../components/Details/DetailedView";

class Homepage extends React.Component {
  render() {
    return (
      <section className="container">
        {this.props.popupSeen ? (
          <DetailedView toggleID={this.props.popupID} />
        ) : (
          <AddMessageForm />
        )}
        ;
        <MessageFeed />
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
