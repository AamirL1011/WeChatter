import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import { addMsg } from "../../actions";

class AddMessageForm extends React.Component {
  state = {
    msgBox: null,
  };

  handleChangeMsg = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChangeUsr = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("addMessageForm", this.state.msgBox);
    const newMessage = {
      message: this.state.msgBox,
      username: this.state.usernameBox,
      timestamp: null,
      id: null,
    };
    newMessage.id = Math.random();
    const date = new Date();
    newMessage.timestamp = date;
    this.props.addMsg(newMessage);
    console.log("addMessageFeed", this.props);
  };

  render() {
    return (
      <div className="container-div">
        <h1>Add A Message</h1>
        <div className="msgForm">
          <h3>Please complete the form:</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="usernameBox">Username:</label>
              <input
                type="text"
                id="usernameBox"
                onChange={this.handleChangeUsr}
              />
            </div>
            <div>
              <label htmlFor="msgBox">Message:</label>
              <input type="text" id="msgBox" onChange={this.handleChangeMsg} />
            </div>
            <button className="button_stuff">Add Message</button>
          </form>
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

export default connect(mapStateToProps, { addMsg })(AddMessageForm);
