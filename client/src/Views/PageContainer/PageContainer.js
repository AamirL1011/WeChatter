import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import HomePage from "../Pages/HomePage.js";
import MeetingRoom from '../Pages/MeetingRoom.js';
import {SocketContext} from '../../Services/SocketContext.js';



function PageContainer(props) {

    const {localFeed, meetingAccepted} = useContext(SocketContext);

    return(
        <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"flex-start"} 
        style={{backgroundColor: "rgba(230, 230, 230, 1.0)", height: "100vh", maxWidth: "100vw", maxHeight: "100vh"}}>
            {
                meetingAccepted? (<MeetingRoom />) : (
                <>
                    <HomePage />
                    <video ref={localFeed} alt={"..."} width={"0px"} />
                    </>)
            }
        </Grid>
    )
}


export default PageContainer;