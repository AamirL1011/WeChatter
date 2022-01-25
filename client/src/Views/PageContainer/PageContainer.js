import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomePage from "../Pages/HomePage.js";
import {ContextProvider} from '../../Services/SocketContext';
import Footer from '../../Components/Layout/Footer.js';



function PageContainer(props) {



    return(
        <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"flex-start"} style={{backgroundColor: "rgba(230, 230, 230, 1.0)", height: "100vh", maxWidth: "100vw", maxHeight: "100vh"}}>
           <ContextProvider>
           <HomePage />
           </ContextProvider>
           <Footer />
        </Grid>
    )
}


export default PageContainer;