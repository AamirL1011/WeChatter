import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class MessageFeed extends React.Component {
  render() {
    const { messages } = this.props;
    console.log("messageFeedProps", this.props);
    const messageList = messages.map((message) => (
      <ListItem
        key={message.id}
        value={message.message}
        delMsgID={message.id}
      />
    ));
    return (
      <div className="container-div" id="msgFeed">
        <h1>Chatter</h1>
        <div className="msgFeed">
          <table id="msgList">{messageList}</table>
        </div>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  // name is by convention
  return { messages: state.messages.messages }; // now it will appear as props
};

export default connect(mapStateToProps)(MessageFeed);
