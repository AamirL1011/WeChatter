import React, { useState, useRef, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography, Button, Skeleton } from '@mui/material';
import Paper from '@material-ui/core/Paper';
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer.js";
import Notifications from "../../Components/Notifications/Notifications.js";
//import Options from "../../Components/Options/Options.js";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import { useAuth0 } from "@auth0/auth0-react";
import {SocketContext} from '../../Services/SocketContext.js';




function MeetingRoom() {

    let msgInput = useRef(null);
    const { user, logout } = useAuth0();
    const {roomID, leaveMeeting} = useContext(SocketContext);


  const handleEnter = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log(`Pressed keyCode ${event.key}`);
        let newMessage = msgInput.current.value;
        msgInput.current.value = "";
        console.log(`Message to send ${newMessage}`);
        event.target.blur();
      }
  }  

  return ( <Grid container item direction={"row"} style={{width: "100vw", height: "100vh"}}>
  <Grid item xs={12} md={2} style={{backgroundColor: "rgba(151, 152, 153, 1.0)"}}>
    <Grid container item xs={12} direction={"row"} justifyContent={"center"} alignItems={"flex-start"} style={{ height: "100%", width: "100%"}}>
        <Grid item xs={10} md={10} style={{textAlign: "center", paddingTop: "3px"}}>
            <span style={{fontSize: "1.3vw"}}>{user.name}</span>
        </Grid>
        <Grid item xs={2} xs={2} style={{textAlign: "start", paddingTop: "3px"}}>
            <AccountCircleTwoToneIcon style={{fontSize: "1.8vw", marginTop: "1px"}} />
        </Grid>
        <Grid item xs={12} style={{textAlign: "center"}}>
            <Button  fullWidth
                    onClick={() => leaveMeeting()}
                    endIcon={<ExitToAppTwoToneIcon style={{fontSize: "1.5vw", color: "white"}} />}
                    variant={"contained"}
                    size="small"
                    style={{backgroundColor: "darkred", borderRadius: "0px"}}
                    disableElevation={true}
                    >
                      <span style={{fontSize: "1.2vw", color: "white"}}>Leave Meeting</span>
            </Button>
        </Grid>
        <Grid item xs={12}>
          <span>Meeting Room ID: {roomID}</span>
        </Grid>
        <Grid item xs={11} style={{height: "75%", border: "2px solid lightgrey"}}>
        <Notifications />
        </Grid>
    </Grid>
  </Grid>
  <Grid item xs={12} md={8}>
    <VideoPlayer/>
  </Grid>
  <Grid item xs={12} md={2} style={{backgroundColor: "rgba(97, 118, 135, 1.0)"}}>
    <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{ height: "100%", width: "100%"}}>
        <Grid item xs={11} style={{border: "2px solid white", borderRadius: "6px", height: "300px", maxHeight: "100%", textAlign: "center"}}>
        Secure messaging feature coming soon!
        <Skeleton>
          
        </Skeleton>
        </Grid>
        <Grid item xs={11} style={{ height: "90px", width: "100%", textAlign: "center"}}>
            <Paper style={{flexGrow: 1, height: "100%", paddingBottom: "3px"}}>
            <TextField
          id="outlined-multiline-static"
          label="Send Msg"
          inputRef={msgInput}
          multiline
          rows={2}
          placeholder="Enter message..."
          onKeyPress={(EVENT) => handleEnter(EVENT)}
          margin="dense"
          style={{width: "95%", marginTop: "7px"}}
          disabled={true}
        />
            </Paper>
        </Grid>
    </Grid>
  </Grid>
</Grid>   );
}

export default MeetingRoom;
