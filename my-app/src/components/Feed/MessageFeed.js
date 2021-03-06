import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import ListItem from "./components/ListItem";

class MessageFeed extends React.Component {
  // renders ChitChats to Chatter feed
  render() {
    const { messages } = this.props;
    const messageList = messages.map((message) => (
      <ListItem
        key={message.id}
        value={message.message}
        delMsgID={message.id}
      />
    ));
    return (
      <div className="container-div" id="msgFeed">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h2>Chatter</h2>
          </div>
        </div>
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
