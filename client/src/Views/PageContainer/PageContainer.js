import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import HomePage from "../Pages/HomePage.js";
import MeetingRoom from '../Pages/MeetingRoom.js';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {Typography} from "@material-ui/core";
import {SocketContext} from '../../Services/SocketContext.js';



function PageContainer(props) {

    const {local, meetingAccepted} = useContext(SocketContext);

    if (local == '') {
        return (<div> 
          <Backdrop sx={{ color: '#252525', zIndex: "60" }}
          open={true}>
          <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{height: "100vh", width: "100vw"}}>
              <Grid item xs={12} sm={10} style={{textAlign: 'center'}}>
              <Typography variant="h4" style={{color: "whitesmoke"}}>Please wait while we establish a connection with the server. 
              This may take a few moments<span className="loadingDots" style={{fontSize: "1.1em"}}>...</span></Typography>
              </Grid>
              <Grid item xs={12} style={{textAlign: 'center'}}>
              <CircularProgress color="inherit" style={{color: "whitesmoke"}}  />
              </Grid>
          </Grid>
          </Backdrop></div>
                              );
      }

    return(
        <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"flex-start"} 
        style={{backgroundColor: "rgba(230, 230, 230, 1.0)", height: "100vh", maxWidth: "100vw", maxHeight: "100vh"}}>
            {
                meetingAccepted? (<MeetingRoom />) : (
                <>
                    <HomePage />
                    </>)
            }
        </Grid>
    )
}


export default PageContainer;