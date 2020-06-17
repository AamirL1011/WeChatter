import React from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { getDetails } from '../../actions';

class DetailedView extends React.Component {

    render() {
        const {toggleID, messages} = this.props;
        let filteredMessage = messages.filter(message => { // evaluates to true if id matches then adds it to array
            return message.id === toggleID;
        });
        console.log('DetailedView message:', filteredMessage);
        return <div className={"container-div"}>
            <h1>Message Details</h1>
            <div className={"msgForm"}>
                <h5><strong><u>Message ID:</u></strong> {filteredMessage[0].id}</h5>
                <h5><strong><u>Username:</u></strong> {filteredMessage[0].username}</h5>
                <h5><strong><u>Message:</u></strong> {filteredMessage[0].message}</h5>
                <h5><strong><u>Timestamp:</u></strong> {filteredMessage[0].timestamp.toString()}</h5>
            </div>
        </div>
    }

}



//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return { messages: state.messages.messages }; //now it will appear as props
};

export default connect(mapStateToProps, {getDetails})(DetailedView);
