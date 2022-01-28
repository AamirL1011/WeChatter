import React, {useContext, useState, useEffect} from 'react';
import {Grid, Button, TextField, Typography, Container, Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import { Phone } from '@material-ui/icons';

import {SocketContext} from '../../Services/SocketContext.js';
import { useAuth0 } from "@auth0/auth0-react";


function RoomOptions() {
    const {local, setName, joinMeeting, setMeetingAccepted, changeRoomID } = useContext(SocketContext);
    
    const { user } = useAuth0();
    const [idToJoin, setIdToJoin] = useState(''); 
    const [startMeet, setStartMeet] = useState(true);

    useEffect(() => {
        setName(user.name);
        setIdToJoin(local);
    }, [local])

    const handleJoinMeeting = (joinID) => {
        if (joinID == local) {
            changeRoomID(local);
            setMeetingAccepted(true);
        } else {
            joinMeeting(joinID);
        }
    }
    return (
        <Grid container item direction="row" justifyContent={"space-evenly"} alignItems={"center"} style={{marginTop: "5px"}}>
       <Grid item xs={11} md={6}>
            <Paper style={{borderRadius: "6px", paddingTop: "5px", paddingBottom: "5px"}}  elevation={10}>
                <form noValidate autoComplete="off">
                    <Grid container direction="row" justifyContent={"space-evenly"} alignItems={"center"}>
                        <Grid item xs={12} style={{backgroundColor: "rgba(189, 189, 189, 1.0)", height: "50px", width: "100%", marginTop: "-5px", 
                        borderTopLeftRadius: "6px", borderTopRightRadius: "6px"}}>
                            <Grid container>
                                <Grid item xs={11}>
                                    <Typography variant="h6" style={{paddingLeft: "20px", paddingTop: "10px"}}>
                                        <span style={{color: "#7d7d7d"}}>Meeting Options</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={11} md={5} style={{paddingBottom: "10px", paddingTop: "20px"}}>
                            <Typography>
                                Join meeting as:
                            </Typography>
                            <TextField label="Name" defaultValue={user.name} fullWidth
                             onChange={(e) => setName(e.target.value) } />
                        </Grid>
                        <Grid item xs={11} md={5} style={{paddingBottom: "10px", paddingTop: "20px"}}>
                            <Typography>
                                Meeting Room:
                            </Typography>
                            <TextField label="Enter Meeting ID" value={idToJoin} fullWidth
                             onChange={(e) => {
                                 if (e.target.value != local ) {
                                    setStartMeet(false);
                                 } else {
                                    setStartMeet(true);
                                 }
                                 setIdToJoin(e.target.value)} 
                                 } 
                                
                                 />      
                             
                        </Grid>
                        <Grid item xs={11} md={11} style={{paddingBottom: "10px", textAlign: "end"}}>
                             <Button 
                                    variant="contained"
                                    startIcon={<Phone fontSize="large" style={{color: "white"}} />}
                                    style={{backgroundColor: "rgba(53, 143, 252, 1.0)", color: "white"}}
                                    onClick={() => handleJoinMeeting(idToJoin)}
                                    >
                                        {(startMeet)? "Start Meeting" : "Join"}
                             </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        
        </Grid>
        </Grid>
     );
}

export default RoomOptions;