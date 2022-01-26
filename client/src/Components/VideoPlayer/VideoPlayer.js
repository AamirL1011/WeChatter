import React, {useContext, useRef, useState, createRef, useEffect} from 'react';
import {Grid, Typography, Paper, makeStyles} from '@material-ui/core';

import {SocketContext} from '../../Services/SocketContext';


const useStyles = makeStyles((theme) => ({
    videoMe: {
      height: '100%',
      maxWidth: "100%",
      objectFit: "cover",
      [theme.breakpoints.down('sm')]: {
        maxWidth: "100%",
      },
    },
    videoOther: {
        width: "240px",
        maxWidth: "100%",
        objectFit: "cover",
        [theme.breakpoints.down('sm')]: {
          maxWidth: "100%",
        },
      },
    paperMe: {
        maxWidth: "150px",
        padding: '5px',
        marginTop: "10px",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            width: '120px',
            maxWidth: "100%",
          },
      },
      paperOther: {
        maxWidth: "240px",
        maxHeight: "100%",
        padding: '5px',
        marginTop: "10px",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            width: '150px',
            maxWidth: "100%",
          },
      },
  }));

function VideoPlayer() {

    const {name, meetingAccepted, 
        remoteStreams, meetingEnded, setStream, stream, meeting} = useContext(SocketContext);

    const classes = useStyles();
    let remoteVidFeed = useRef();
    let localVidFeed = useRef();
    const [hasRemote, setHasRemote] = useState(false);


    useEffect(() => {
      if (stream) {
        localVidFeed.current.srcObject = stream;
      } else {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((currentStream) => {
            localVidFeed.current.srcObject = currentStream;
        }); 
      }

      if (remoteStreams.length > 0) {
        remoteVidFeed.current.srcObject = remoteStreams[0];
      } 
    
    }, [meetingAccepted, remoteStreams.length])
       
  return (
  <Grid container item direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
      {
          stream && (
            <Grid item xs={9} sm={7} md={3} style={{textAlign: "center", display: "flex",
            justifyContent: "center"}}>
                <Paper className={classes.paperMe}>
                <video playsInline muted autoPlay ref={localVidFeed} className={classes.videoMe}  />
                </Paper>
            </Grid>
          )
      }
      {
             meetingAccepted && !meetingEnded ? (
            <Grid item xs={12} md={10} style={{textAlign: "center", display: "flex",
            justifyContent: "center"}}>
               <div className={classes.paperOther}>
                <Grid container>
                   {/*  <Grid item xs={12}>
                    <Typography>
                    {call.name || 'Name'}
                </Typography>
                    </Grid> */}
                    <Grid item xs={12} style={{maxHeight: "90%", textAlign: "center"}}>
                    <video playsInline autoPlay ref={remoteVidFeed} className={classes.videoOther} />
                    </Grid>
                </Grid>
                </div>
            </Grid>
          ) : (<></>)
      }
  </Grid>
  );
}

export default VideoPlayer;
