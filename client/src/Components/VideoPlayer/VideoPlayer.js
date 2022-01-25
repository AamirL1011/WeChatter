import React, {useContext} from 'react';
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
        width: "100%",
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

    const {name, callAccepted, myVideoFeed, 
        otherVideoFeed, callEnded, stream, call} = useContext(SocketContext);

    const classes = useStyles();
    
       
  return (
  <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
      {
          stream && (
            <Grid item xs={9} sm={7} md={3} style={{textAlign: "center", display: "flex",
            justifyContent: "center"}}>
                <Paper className={classes.paperMe}>
                <video playsInline muted autoPlay ref={myVideoFeed} className={classes.videoMe}  />
                </Paper>
            </Grid>
          )
      }
      {
          callAccepted && !callEnded ? (
            <Grid item xs={12} md={10} style={{textAlign: "center", display: "flex",
            justifyContent: "center"}}>
                <Paper className={classes.paperOther}>
                <Grid container>
                   {/*  <Grid item xs={12}>
                    <Typography>
                    {call.name || 'Name'}
                </Typography>
                    </Grid> */}
                    <Grid item xs={12} style={{maxHeight: "90%", textAlign: "center"}}>
                    <video playsInline autoPlay ref={otherVideoFeed} className={classes.videoOther} />
                    </Grid>
                </Grid>
                </Paper>
            </Grid>
          ) : (<></>)
      }
  </Grid>
  );
}

export default VideoPlayer;
