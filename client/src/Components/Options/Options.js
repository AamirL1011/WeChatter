import React, {useContext, useState} from 'react';
import {Grid, Button, TextField, Typography, Container, Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Assignment, Phone, PhoneDisabled} from '@material-ui/icons';

import {SocketContext} from '../../Services/SocketContext.js';

function Options({children}) {
    const {me, callAccepted, name, setName, callEnded, 
        leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState(''); 
    //const classes = useStyles();

    return (
        <Grid container item direction="row" justifyContent={"space-evenly"} alignItems={"center"} style={{marginTop: "5px"}}>
       <Grid item xs={11}>
            <Paper elevation={10}>
                <form noValidate autoComplete="off">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography>
                                Account Info
                            </Typography>
                            <TextField label="Name" value={name} fullWidth
                             onChange={(e) => setName(e.target.value) } />
                             {console.log("me", me)}
                             <CopyToClipboard text={me}>
                                <Button variant="contained" fulWidth startIcon={<Assignment fontSize="large" />}>
                                    Copy Meeting ID
                                </Button>
                             </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>
                                Make a call
                            </Typography>
                            <TextField label="ID to Call" value={idToCall} fullWidth
                             onChange={(e) => setIdToCall(e.target.value) } />
                             {callAccepted && !callEnded ? (
                                    <Button 
                                    variant="contained"
                                    startIcon={<PhoneDisabled fontSize="large" />}
                                    fullWidth
                                    onClick={leaveCall}
                                    >
                                        End Call
                                    </Button>
                             ): (
                                    <Button 
                                    variant="contained"
                                    startIcon={<Phone fontSize="large" />}
                                    fullWidth
                                    onClick={() => callUser(idToCall)}
                                    >
                                        Call
                                    </Button>
                             ) }
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        
        </Grid>
        </Grid>
     );
}

export default Options;