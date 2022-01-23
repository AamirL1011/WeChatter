import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@mui/material';
import Paper from '@material-ui/core/Paper';
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer.js";
import Notifications from "../../Components/Notifications/Notifications.js";
import Options from "../../Components/Options/Options.js";


function HomePage() {

    let msgInput = useRef(null);


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

  return ( <Grid container item direction={"row"} style={{maxWidth: "100vw", height: "85.1%"}}>
  <Grid item xs={2} style={{backgroundColor: "rgba(151, 152, 153, 1.0)"}}>
    <Grid container item xs={12} direction={"row"} style={{ height: "100%", width: "100%"}}>

    </Grid>
  </Grid>
  <Grid item xs={7}>
    <VideoPlayer/>
    <Options>
        <Notifications />
    </Options>
  </Grid>
  <Grid item xs={3} style={{backgroundColor: "rgba(97, 118, 135, 1.0)"}}>
    <Grid container item xs={12} direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}style={{ height: "100%", width: "100%"}}>
        <Grid item xs={11} style={{border: "2px solid red", height: "300px", maxHeight: "100%"}}>

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
        />
            </Paper>
        </Grid>
    </Grid>
  </Grid>
</Grid>   );
}

export default HomePage;
