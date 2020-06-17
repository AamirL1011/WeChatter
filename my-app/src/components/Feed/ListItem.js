import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import { delMsg, togglePopup } from "../../actions";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

class ListItem extends React.Component {
  render() {
    const { value, delMsgID, messages } = this.props;
    const filteredMessage = messages.filter((message) => {
      // evaluates to true if id matches then adds it to array
      return message.id === delMsgID;
    });
    console.log("renderListItem props:", this.props);
    return (
      <tr>
        <td>
          <OverlayTrigger
            key={"left"}
            placement={"left"}
            overlay={
              <Tooltip id={`tooltip-left`}>
                <h3>Message Details</h3>
                <div>
                  <h6>
                    <strong>
                      <u>Message ID:</u>
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
              </Tooltip>
            }
          >

            <p variant="secondary">{value}</p>
          </OverlayTrigger>
        </td>
        <td className={"delButtonRow"}>
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
          <p className={"transparentCol"}>..</p>
        </td>
      </tr>

      /*{<span>
        <li>
          <button
            className="messageBtn"
            onClick={() => {
              this.props.togglePopup(delMsgID);
            }}
          >
            {value}
          </button>
          <button
            className="button_stuff righty"
            onClick={() => {
              this.props.delMsg(delMsgID);
            }}
          >
            X
          </button>
        </li>
      </span>}*/
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
