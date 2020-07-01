import React from "react";
import "../../../../App.css";

class SocialUnit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heartGiven: false,
    };
  }


  handleheart = (messageID) => {
    const { currUser } = this.props;
    let heartsToGive = -1;
    if (!this.state.clapsGiven) {
      heartsToGive = 1;
    }
    this.setState({
      clapsGiven: !this.state.clapsGiven,
    });
    const info = { id: messageID, value: heartsToGive, donor: currUser};
    //this.props.addClap(info);
  };


  render() {
    const { messageID, name, heartNum } = this.props;
    return (
      <div className="container-div bg-secondary">
        <div className="socialUnit">
          <div className={"row"}>
            <div className={"col d-flex socialHeart justify-content-end align-items-center"}>
              <button
                className="heartButton"
                onClick={() => this.handleHeart(messageID)}
                style={{backgroundColor: (this.state.heartGiven)? "#d68b0d": "#FCA311"}}
              >
                <img
                  className="heartButtonImg"
                  src={(this.state.heartGiven)? "heart_icon_selected.png" : "heart_icon.png"}
                  width="25px"
                  height="25px"
                  style={{backgroundColor: (this.state.heartGiven)? "#d68b0d": "#FCA311"}}
                  alt=""
                />
                {(heartNum >= 1000)? Number.parseFloat(heartNum/1000).toPrecision(2) + "k" : heartNum}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default SocialUnit;