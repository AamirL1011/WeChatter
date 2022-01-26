import React, {useContext, useState, useEffect} from 'react';
import {Grid, Button, TextField, Typography, Container, Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import { Phone } from '@material-ui/icons';

import {SocketContext} from '../../Services/SocketContext.js';
import { useAuth0 } from "@auth0/auth0-react";


function RoomOptions() {
    const {local, setName, joinMeeting, setMeetingAccepted } = useContext(SocketContext);
    
    const { user } = useAuth0();
    const [idToJoin, setIdToJoin] = useState(''); 

    useEffect(() => {
        setName(user.name);
        setIdToJoin(local);
    }, [local])

    const handleJoinMeeting = (joinID) => {
        if (joinID == local) {
            setMeetingAccepted(true);
        } else {
            joinMeeting(joinID);
        }
    }
    return (
        <Grid container item direction="row" justifyContent={"space-evenly"} alignItems={"center"} style={{marginTop: "5px"}}>
       <Grid item xs={11} md={6}>
            <Paper elevation={10}>
                <form noValidate autoComplete="off">
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Typography>
                                Join meeting as:
                            </Typography>
                            <TextField label="Name" defaultValue={user.name} fullWidth
                             onChange={(e) => setName(e.target.value) } />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography>
                                Join a Meeting:
                            </Typography>
                            <TextField label="Enter Meeting ID" value={idToJoin} fullWidth
                             onChange={(e) => setIdToJoin(e.target.value) } />      
                                    <Button 
                                    variant="contained"
                                    startIcon={<Phone fontSize="large" />}
                                    fullWidth
                                    onClick={() => handleJoinMeeting(idToJoin)}
                                    >
                                        Join
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