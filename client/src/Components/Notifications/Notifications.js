import React, {useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {Button, Box} from '@material-ui/core';

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
        <Box style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', wordWrap: 'break-word' }}>
            <h1 style={{fontSize: "1.2vw"}}>{meeting.name} has requested to join: </h1>
            <Button variant="contained" onClick={() => handleAnswer()}>
                Answer
            </Button>
        </Box>
    )}
  </>
  );
}

export default Notifications;