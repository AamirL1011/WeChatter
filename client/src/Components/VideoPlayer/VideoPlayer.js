import React, {useContext} from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';

import {SocketContext} from '../../Services/SocketContext';

function VideoPlayer() {

    const {name, callAccepted, myVideoFeed, 
        otherVideoFeed, callEnded, stream, call} = useContext(SocketContext);

       
  return (
  <Grid container>
      video
      {
          stream && (
            <Grid item xs={12} md={6}>
                <Paper>
                <video playsInline muted autoPlay ref={myVideoFeed} style={{width: "300px", maxWidth: "100%"}} />
                </Paper>
            </Grid>
          )
      }
      {
          callAccepted && !callEnded (
            <Grid item xs={12} md={6}>
                <Typography>
                    {call.name || 'Name'}
                </Typography>
                <video playsInline autoPlay ref={otherVideoFeed} style={{width: "300px", height: "200px"}} />
            </Grid>
          )
      }
  </Grid>
  );
}

export default VideoPlayer;
