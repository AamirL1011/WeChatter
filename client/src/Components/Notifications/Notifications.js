import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core';

import {SocketContext} from '../../Services/SocketContext.js';

function Notifications() {
    const {answerCall, call, callAccepted} = useContext(SocketContext);

  return (
  <>
    {call.hasReceivedCall && !callAccepted && (
        <div style={{display: 'flex', justifyContent: 'center' }}>
            <h1>{call.name} is calling: </h1>
            <Button variant="contained" onClick={answerCall}>
                Answer
            </Button>
        </div>
    )}
  </>
  );
}

export default Notifications;