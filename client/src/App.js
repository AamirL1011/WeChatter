import './App.css';
import Grid from '@material-ui/core/Grid';
import {StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import PageContainer from "./Views/PageContainer/PageContainer";
import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {updateMainState} from "./Actions/mainActions";
import { makeStyles } from '@material-ui/core/styles';
import theme from "./themes";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Button, Typography} from "@material-ui/core";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CircleIcon from '@mui/icons-material/Circle';
import { useAuth0 } from "@auth0/auth0-react";
import {ContextProvider} from './Services/SocketContext';




const useStyles = makeStyles((theme) => ({
  introContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    opacity: "100% !important"
  },
  enterButton: {
    "&:hover": {
      "& span": {
        "& svg": {
          "& path": {
            d:
                "path('m 12 4 l -1.41 1.41 L 16.17 11 H 4 v 2 h 12.17 l -5.58 5.59 L 12 20 l 8 -8 Z')"
          }
        }
      }
    }
  }
}));


function App(props) {
  const classes = useStyles();
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();



  const handleEnter = () => {
    loginWithRedirect();
  }

  if (isLoading) {
    return (<div> 
      <Backdrop sx={{ color: '#252525', zIndex: "60" }}
      open={true}>
      <CircularProgress color="inherit" />
      </Backdrop></div>
                          );
  }


  return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
              <Grid>
                {
                    !isAuthenticated && (
                        <Grid container className={"splashPage"} justifyContent={"center"} alignItems={"center"} style={{backgroundColor: "lightgray", width: "100vw", height: "100vh"}}>
                          <video className={"splashVid"} playsInline autoPlay muted loop>
                            <source src={process.env.PUBLIC_URL + "/Assets/Videos/video.mp4"} type="video/mp4" />
                          </video>

                          <Grid container item xs={11} sm={7} md={5} lg={4} xl={3} style={{zIndex: "50"}} justifyContent={"center"} alignItems={"center"}>
                            <Grid container item justifyContent={"center"} alignItems={"center"} >

                              <Grid container item className="GreetingBox">
                                <Box sx={{ flexGrow: 1, background: "rgba(232, 229, 220, 0.6)", backdropFilter: "blur(6px)", padding: "3%", borderRadius: "10px", boxShadow: "0px 0.5px 1px grey" }}>
                                  <Grid container spacing={2}>
                                      <Grid item xs={12}>
                                          <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"} >
                                              <Grid item xs={3} sm={2} style={{marginTop: "-1.5%", marginLeft: "-1.5%"}}>
                                                  <CircleIcon className={"menuButton"} onClick={() => handleEnter()}  style={{color: "rgba(255,69,58,0.95)", fontSize: "15px", paddingRight: "5px", cursor: "pointer"}} />
                                                  <CircleIcon className={"menuButton"} onClick={() => handleEnter()} style={{color: "rgba(255,186,10,0.95)", fontSize: "15px", paddingRight: "5px", cursor: "pointer"}} />
                                                  <CircleIcon className={"menuButton"} onClick={() => handleEnter()} style={{color: "rgba(50,215,75,0.95)", fontSize: "15px", cursor: "pointer"}} />
                                              </Grid>
                                              <Grid item xs={9} sm={10} />
                                          </Grid>
                                      </Grid>
                                      <Grid container item>
                                <Box sx={{ flexGrow: 1, zIndex: "55", marginBottom: "5%"}}>
                                        <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>
                                            <Grid item xs={4} style={{textAlign: "center"}}>
                                              <Paper style={{background: "rgba(0, 0, 0, 0.2)", padding: "5%", textAlign: "center"}} elevation={1}>
                                                <img src={process.env.PUBLIC_URL + "/Assets/Images/WeChatter_Logo.png"} style={{width: "100%", height: "100%"}}/>
                                              </Paper>
                                            </Grid>
                                        </Grid>
                                </Box>
                              </Grid>
                                    <Grid item xs={12} >
                                      
                                          <Grid container item direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                                            <Grid item xs={12} style={{textAlign: "center"}}>
                                                <span style={{color: "gray", fontSize: "1.8em", fontWeight: "400",
                                                    fontFamily: "-apple-system, Roboto, serif"}}>
                                                      <span id={"motto1"}>Kick back </span>
                                                      <span id={"motto2"}>and </span>
                                                      <span>
                                                        <strong id={"motto3"}>WeChatter</strong>
                                                      </span>
                                                </span>
                                            </Grid>
                                          </Grid>
                                      
                                    </Grid>
                                    <Grid item xs={4} />
                  
                                    <Grid item xs={4} style={{textAlign: "center"}}>
                                      <Button variant="outlined"
                                              size={"medium"}
                                              style={{textTransform: "none", color: "white", backgroundColor: "rgba(0, 0, 0, 0.2)",
                                                  borderRadius: "4px", fontFamily: "-apple-system, Roboto, serif"}}
                                              className={`enter-button ${classes.enterButton}`}
                                              onClick={() => handleEnter()}>
                                       <Typography><span style={{fontFamily: "-apple-system, Roboto, serif"}}>Enter</span></Typography>
                                      </Button>
                                    </Grid>
                                    <Grid item xs={4} />
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                    )
                }
                {
                    isAuthenticated && (
                      <ContextProvider>
                        <PageContainer />
                      </ContextProvider>
                    )
                }
              </Grid>
        </ThemeProvider>
      </StylesProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState.showMain,
  };
};

const mapDispatchToProps = {
  updateMainState,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
