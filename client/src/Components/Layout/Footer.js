import React from 'react';
import {Divider, Container, Box} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import Grid from '@material-ui/core/Grid';




function Footer() {
    let year = new Date().getFullYear();

  return (
    <Grid container direction={"row"} item alignItems={"center"} justifyContent={"flex-start"} style={{backgroundColor: "rgba(56, 56, 56, 1.00)", maxWidth: "100vw", bottom: 0, position: "absolute", display: 'flex'}}>
    <Grid item xs={3} md={2} style={{paddingLeft: "20px"}}>
        <Grid container item xs={12}>
            <img src={process.env.PUBLIC_URL + "/Assets/Images/WeChatter_Logo.png"} style={{maxHeight: "40px", maxWidth:"50px"}} alt="..."/>
        </Grid>
    </Grid>
    <Grid item xs={6} md={8} style={{color :"whitesmoke", paddingLeft: "10px", textAlign: "center"}}>
        ©{year} WeChatter. Created with ❤️ in someone's basement.
    </Grid>
<Grid item xs={3} sm={2}>
    <Grid container direction={"row"} alignItems={"center"} justifyContent={"flex-start"} >
        <Grid item xs={1}>
            <Divider orientation={"vertical"} flexItem={true} style={{height: "40px", maxHeight: "100%", marginTop: "10px", marginBottom: "10px", backgroundColor: "white"}} />
        </Grid>
        <Grid item xs={11} >
            <Stack
                direction="column"
                spacing={0}
            >
                <Link href="https://github.com/AamirL1011/WeChatter" underline="none" style={{color: "white"}}>GitHub</Link>
                <Link href="https://www.linkedin.com/in/aamir-s/" underline="none" style={{color: "white"}}>LinkedIn</Link>
            </Stack>
        </Grid>
    </Grid>
</Grid>
</Grid>
  );
}

export default Footer;
