import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@mui/material';
import Paper from '@material-ui/core/Paper';


function HomePage() {
  return ( <Grid container item direction={"row"} style={{maxWidth: "100vw", height: "85.1%"}}>
  <Grid item xs={2} style={{backgroundColor: "rgba(151, 152, 153, 1.0)"}}>
    <Grid container item xs={12} direction={"row"} style={{ height: "100%", width: "100%"}}>

    </Grid>
  </Grid>
  <Grid item xs={7}>

  </Grid>
  <Grid item xs={3} style={{backgroundColor: "rgba(97, 118, 135, 1.0)"}}>
    <Grid container item xs={12} direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}style={{ height: "100%", width: "100%"}}>
        <Grid item xs={11} style={{border: "2px solid red", height: "300px", maxHeight: "100%"}}>

        </Grid>
        <Grid item xs={11} style={{ height: "90px", width: "100%", textAlign: "center"}}>
            <Paper style={{flexGrow: 1, height: "100%"}}>
            <TextField
          id="outlined-multiline-static"
          label="Chat Msg"
          multiline
          rows={2}
          flexItem={true}
          style={{width: "95%", marginTop: "7px"}}
        />
            </Paper>
        </Grid>
    </Grid>
  </Grid>
</Grid>   );
}

export default HomePage;
