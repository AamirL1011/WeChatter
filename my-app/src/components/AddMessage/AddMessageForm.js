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
  };

  render() {
    return (
      <div className="container-div">
        <h2>Make A ChitChat</h2>
        <div className="msgForm">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="usernameBox">Username: </label>
              <input
                type="text"
                id="usernameBox"
                onChange={this.handleChangeUsr}
                required={"true"}
              />
            </div>
            <div>
              <label htmlFor="msgBox">Message: </label>
              <input type="text" id="msgBox" onChange={this.handleChangeMsg}  required={"true"} />
            </div>
            <button className="button_stuff">ChitChat</button>
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
