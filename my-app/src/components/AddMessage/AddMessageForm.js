import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import { addMsg } from "../../actions";

class AddMessageForm extends React.Component {
  // local state, not stored in Redux (or MongoDB for future implementations).
  // Other parts of the app don't need to know about it
  state = {
    usernameBox: "",
    avatarBox: "https://i.imgur.com/t5u33J6.png",
    msgBox: "",
  };

  // updates local state of ChitChat message input box
  handleChangeMsg = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // updates local state of ChitChat username box
  handleChangeUsr = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // updates local state of ChitChat avatar box
  handleChangeAvatar = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // handles ChitChat submission
  handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    const newMessage = {
      message: this.state.msgBox,
      username: this.state.usernameBox,
      avatar: this.state.avatarBox,
      timestamp: null,
      hearts: 0,
      heartsGivenBy: [],
      id: null,
    };
    newMessage.id = Math.random();
    const date = new Date();
    newMessage.timestamp = date;
    this.props.addMsg(newMessage);
  };

  render() {
    return (
      <div className="container-div addMessageDiv">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h2>Make A ChitChat</h2>
          </div>
        </div>

        <div className="msgForm">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-5">
                <label htmlFor="usernameBox">Username: </label>
              </div>
              <div className="col-7">
                <input
                  className="inputBox"
                  type="text"
                  id="usernameBox"
                  onChange={this.handleChangeUsr}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-5">
                <label htmlFor="avatarBox">Profile Img URL: </label>
              </div>
              <div className="col-7">
                <input
                  className="inputBox"
                  type="text"
                  id="avatarBox"
                  onChange={this.handleChangeAvatar}
                  defaultValue="https://i.imgur.com/t5u33J6.png"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-5">
                <label htmlFor="msgBox">Message: </label>
              </div>
              <div className="col-7">
                <input
                  className="inputBox"
                  type="text"
                  id="msgBox"
                  onChange={this.handleChangeMsg}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col d-flex justify-content-center">
                <button className="button_stuff">ChitChat</button>
              </div>
            </div>
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
