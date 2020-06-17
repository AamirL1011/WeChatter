import React from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { delMsg , togglePopup} from '../../actions';


class ListItem extends React.Component {


    render () {
        const { value, delMsgID} = this.props;
        console.log('renderListItem popUpSeen:',this.props);
        return <span><li><button className={"messageBtn"} onClick={() => {this.props.togglePopup(delMsgID)}}>{value}</button><button className={"button_stuff righty"} onClick={ () => {this.props.delMsg(delMsgID)}}>X</button></li></span>;
    }
}


//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return { messages: state.messages.messages,
             popupSeen: state.popupToggle.popPresent,
             popupID: state.popupToggle.popID}; //now it will appear as props
};

export default connect(mapStateToProps, {delMsg, togglePopup})(ListItem);


