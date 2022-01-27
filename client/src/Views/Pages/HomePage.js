import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Box, Divider } from '@mui/material';
import RoomOptions from "../../Components/Options/RoomOptions.js";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import Footer from '../../Components/Layout/Footer.js';
import { useAuth0 } from "@auth0/auth0-react";
import {SocketContext} from '../../Services/SocketContext.js';




function HomePage() {

    const { user, logout } = useAuth0();
    const {localFeed} = useContext(SocketContext);


  return ( <Grid container item direction={"row"} style={{maxWidth: "100vw", height: "100vh", maxHeight: "100vh"}}>
  
  <Grid container item direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} xs={12} md={10} style={{height: "89%"}}>
      <RoomOptions />
  </Grid>
  <Grid item xs={12} md={2} style={{backgroundColor: "rgba(97, 118, 135, 1.0)", minHeight: "100px"}}>
    <Grid container direction={"row"} justifyContent={"flex-start"} alignItems={"flex-start"} style={{ height: "100%", width: "100%"}}>
        <Grid item xs={12} style={{textAlign: "center"}}>
        <Box style={{ flexWrap: 'wrap', wordWrap: 'break-word'}}>
        <Button  fullWidth
                    onClick={() => logout({ returnTo: window.location.origin }) }
                    endIcon={<ExitToAppTwoToneIcon style={{fontSize: "1.5vw", color: "white"}} />}
                    variant={"contained"}
                    size="small"
                    style={{backgroundColor: "rgba(114, 133, 148, 1.0)", borderRadius: "0px"}}
                    disableElevation={true}
                    >
                      <span style={{fontSize: "1.2vw", color: "white"}}>Logout</span>
            </Button>
        </Box>
        </Grid>
        <Grid item xs={12} md={12} style={{textAlign: "center", paddingTop: "3px"}}>
        <Box style={{ flexWrap: 'wrap', wordWrap: 'break-word'}}>
            <Grid container direction={"row"}>
                <Grid item xs={10}>
                <span style={{fontSize: "1.3vw"}}>{user.name}</span>
                </Grid>
                <Grid item xs={2} style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
                <AccountCircleTwoToneIcon style={{fontSize: "1.8vw", marginTop: "1px"}} />
                </Grid>
            </Grid>
        </Box>
        <Divider style={{marginTop: "3px"}} />
    </Grid>
        <Grid item xs={12} style={{height: "87%"}}></Grid>
    </Grid>
  </Grid>
  <Footer />
</Grid>   );
}

export default HomePage;
