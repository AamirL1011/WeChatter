import React from "react";
import "../../../../App.css";
import "./Social.css";
import { connect } from "react-redux";
import { addHeart } from "./actions";


class SocialUnit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heartGiven: false,
    };
  }


  handleHeart = (messageID) => {
    const { currUser } = this.props;
    let heartsToGive = -1;
    if (!this.state.heartGiven) {
      heartsToGive = 1;
    }
    this.setState({
      heartGiven: !this.state.heartGiven,
    });
    const info = { id: messageID, value: heartsToGive, donor: currUser};
    this.props.addHeart(info);
  };


  render() {
    const { messageID, name, heartNum } = this.props;
    return (
      <div className="container-div bg-secondary">
        <div className="socialUnit">
          <div className={"row"}>
            <div className={"col-1 d-flex socialHeart justify-content-start align-items-center"}>
              <button
                className="heartButton"
                onClick={() => this.handleHeart(messageID)}
                style={{backgroundColor: "transparent"}}
              >
                <img
                  className="heartButtonImg"
                  src={(this.state.heartGiven)? "heart_icon_selected.png" : "heart_icon.png"}
                  width="25px"
                  height="25px"
                  style={{backgroundColor: "transparent"}}
                  alt=""
                />
              </button>
            </div>
            <div className={"col-1 d-flex socialHeart justify-content-start align-items-center"}>
              {(heartNum >= 1000)? Number.parseFloat(heartNum/1000).toPrecision(2) + "k" : heartNum}
            </div>
            <div className={"col-10 d-flex socialHeart justify-content-start align-items-center"}>
            </div>
          </div>
        </div>
      </div>
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
    currUser: state.userState.currentUserID
  }; // now it will appear as props
};

export default connect(mapStateToProps, { addHeart })(SocialUnit);
