import React, {useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {Button, Box} from '@material-ui/core';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

import {SocketContext} from '../../Services/SocketContext.js';

function Notifications() {
    const {answerJoin, meeting, meetingAccepted} = useContext(SocketContext);

    const [requestAccepted, setRequestAccepted] = useState(false);

    const handleAnswer = () => {
        answerJoin();
        setRequestAccepted(true);
    }

  return (
  <>
    {meeting.hasReceivedRequest && meetingAccepted && !requestAccepted && (
        <Box style={{display: 'flex', width: "88%", minHeight: "50px", padding: "10px", paddingTop: "0px", 
        backgroundColor: "lightgray", justifyContent: 'center', flexWrap: 'wrap', 
        wordWrap: 'break-word', boxShadow: "0 3px 10px 0.01rem gray" }}>
            <h1 style={{fontSize: "1.2vw"}}>{meeting.name} has requested to join: </h1>
            
            <Button size={"small"} className={"answer-call-button"} startIcon={<PhoneCallbackIcon style={{color: "white"}} />} variant="contained" style={{backgroundColor: "green", color: "white"}} onClick={() => handleAnswer()}>
                Answer
            </Button>
           
        </Box>
    )}
  </>
  );
}

export default Notifications;