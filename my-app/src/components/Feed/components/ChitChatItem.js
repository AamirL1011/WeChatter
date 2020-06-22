import React from "react";
import "../../../App.css";
import moment from "moment";

class ChitChatItem extends React.Component {
  // renders the ChitChat contents
  render() {
    const { message } = this.props;
    console.log("chitchatitem:", this.props);
    return (
      <div className="container-div">
        <div className="chitchatItem">
          <div className={"row"}>
            <div className={"col-2"}>
              <img className={"avatarImg"} src={message[0].avatar} alt=""/>
            </div>
            <div className={"col-7"}>
              <em><strong>{message[0].username}</strong> ChitChat'd:</em>
              <p>{message[0].message}</p>
            </div>
            <div className={"col-3"}>
              {moment(message[0].timestamp).fromNow()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ChitChatItem;