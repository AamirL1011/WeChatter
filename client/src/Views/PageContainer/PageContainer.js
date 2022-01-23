import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomePage from "../Pages/HomePage.js";




import SummarizeIcon from '@mui/icons-material/Summarize';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import {Divider} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';



function PageContainer(props) {

    const handleDialAction = (actionName) => {
        switch(actionName) {
            case "Resume" :{
                const link = document.createElement('a');
                link.href = process.env.PUBLIC_URL + './Assets/Documents/resume.pdf';
                link.setAttribute('download', `resume.pdf`);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
                break;
            }
            case "LinkedIn": {
                const link = document.createElement('a');
                link.href = "https://www.linkedin.com/in/aamir-s/";
                link.click();
                link.parentNode.removeChild(link);
                break;
            }
            case "GitHub": {
                const link = document.createElement('a');
                link.href = "https://github.com/AamirL1011";
                link.click();
                link.parentNode.removeChild(link);
                break;
            }
            default:
                break;
        }
    }

    return(
        <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} style={{backgroundColor: "rgba(230, 230, 230, 1.0)", height: "100vh", maxWidth: "100vw", maxHeight: "100vh"}}>
           <HomePage />
            <Grid container direction={"row"} item alignItems={"center"} justifyContent={"flex-start"} style={{backgroundColor: "rgba(56, 56, 56, 1.00)", maxWidth: "100vw"}}>
                    <Grid item xs={3} md={2} style={{paddingLeft: "20px"}}>
                        <Grid container item xs={12}>
                            <img src={process.env.PUBLIC_URL + "/Assets/Images/WeChatter_Logo.png"} style={{maxHeight: "30px", maxWidth:"40px"}} alt="..."/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={8} style={{color :"whitesmoke", paddingLeft: "10px", textAlign: "center"}}>
                        ©2022 WeChatter. Created with ❤️ in someone's basement.
                    </Grid>
                <Grid item xs={3} sm={2}>
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"flex-start"} >
                        <Grid item xs={1}>
                            <br/>
                            <Divider orientation={"vertical"} flexItem={true} style={{height: "40px", maxHeight: "100%", backgroundColor: "white"}} />
                            <br/>
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
        </Grid>
    )
}


export default PageContainer;