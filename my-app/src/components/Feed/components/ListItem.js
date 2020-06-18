import React from "react";
import "../../../App.css";
import { connect } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ChitChatItem from "./ChitChatItem";
import { delMsg, togglePopup } from "../../../actions";

class ListItem extends React.Component {
  render() {
    const { value, delMsgID, messages } = this.props;
    const filteredMessage = messages.filter((message) => {
      // evaluates to true if id matches then adds it to array
      return message.id === delMsgID;
    });
    return (
      <tr>
        <td>
          <OverlayTrigger overlay={(<Tooltip id="tooltip-left">
            <h4>ChitChat Details</h4>
            <div>
              <h6>
                <strong>
                  <u>ChitChat ID:</u>
                </strong>{" "}
                {filteredMessage[0].id}
              </h6>
              <h6>
                <strong>
                  <u>Username:</u>
                </strong>{" "}
                {filteredMessage[0].username}
              </h6>
              <h6>
                <strong>
                  <u>Date Posted:</u>
                </strong>{" "}
                {filteredMessage[0].timestamp.toString()}
              </h6>
            </div>
          </Tooltip>)} placement="left">
            <div>
              <ChitChatItem ref={this.props.ref} variety={"secondary"} message={filteredMessage} />
            </div>
          </OverlayTrigger>

        </td>
        <td className="delButtonRow">
          <button
            className="button_stuff"
            onClick={() => {
              this.props.delMsg(delMsgID);
            }}
          >
            X
          </button>
        </td>
        <td>
          <p className="transparentCol">......</p>
        </td>
      </tr>
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

export default connect(mapStateToProps, { delMsg, togglePopup })(ListItem);
