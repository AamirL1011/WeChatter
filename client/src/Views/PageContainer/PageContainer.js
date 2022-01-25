import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomePage from "../Pages/HomePage.js";
import {ContextProvider} from '../../Services/SocketContext';
import { useAuth0 } from "@auth0/auth0-react";



import {Divider} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';



function PageContainer(props) {

    const { logout } = useAuth0();


    return(
        <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{backgroundColor: "rgba(230, 230, 230, 1.0)", height: "100vh", maxWidth: "100vw", maxHeight: "100vh"}}>
           <ContextProvider>
           <HomePage />
           </ContextProvider>
            <Grid container direction={"row"} item alignItems={"center"} justifyContent={"flex-start"} style={{backgroundColor: "rgba(56, 56, 56, 1.00)", maxWidth: "100vw"}}>
                    <Grid item xs={3} md={2} style={{paddingLeft: "20px"}}>
                        <Grid container item xs={12}>
                            <img src={process.env.PUBLIC_URL + "/Assets/Images/WeChatter_Logo.png"} style={{maxHeight: "40px", maxWidth:"50px"}} alt="..."/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={8} style={{color :"whitesmoke", paddingLeft: "10px", textAlign: "center"}}>
                        ©2022 WeChatter. Created with ❤️ in someone's basement.
                    </Grid>
                <Grid item xs={3} sm={2}>
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"flex-start"} >
                        <Grid item xs={1}>
                            <br />
                            <Divider orientation={"vertical"} flexItem={true} style={{height: "40px", maxHeight: "100%", padding: "0px", backgroundColor: "white"}} />
                            <br />
                        </Grid>
                        <Grid item xs={11} >
                            <Stack
                                direction="column"
                                spacing={0}
                            >
                                <Link href="https://github.com/AamirL1011/WeChatter" underline="none" style={{color: "white"}}>GitHub</Link>
                                <Link href="https://www.linkedin.com/in/aamir-s/" underline="none" style={{color: "white"}}>LinkedIn</Link>
                                <Link href="#" underline="none" style={{color: "white"}} onClick={() => logout({ returnTo: window.location.origin })}>Logout</Link>

                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default PageContainer;