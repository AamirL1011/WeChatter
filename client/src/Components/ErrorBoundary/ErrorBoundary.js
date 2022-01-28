import React from "react";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@mui/material';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: '',
            errorInfo: '',
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // Use any error reporting service such as Sentry
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }


    render() {
        const {errorInfo, error} = this.state;
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Grid container justifyContent={"space-evenly"} alignItems={"center"} style={{maxHeight: "100%", maxWidth: "100%", overflowY: "scroll"}}>
               <br />
                <Grid item xs={12} sm={10} style={{textAlign: "center"}}>
                    <Typography variant={"h3"}>
                    500: Internal Server Error
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10} style={{textAlign: "center"}} >
                    <Typography variant={"h6"}>
                        Uh oh, something went wrong. Please try reloading the app and contact us with details of this error.{' '}
                                <span
                                    style={{ cursor: 'pointer', color: '#0077FF' }}
                                    onClick={() => {
                                        window.location.reload();
                                    }}
                                > 
                                Click here to reload the application.
                                </span>{' '}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10} style={{textAlign: "center"}}>
                    <Typography variant={"h6"}>
                    Error Log:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10} style={{textAlign: "center"}}>
                    <Typography variant={"body1"}>
                    {error.toString()}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10} style={{textAlign: "center"}}>
                    <Typography variant={"h6"}>
                    Stack Trace:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10} style={{textAlign: "center"}}>
                    <Typography variant={"body1"}>
                    {errorInfo && errorInfo.componentStack.toString()}
                    </Typography>
                </Grid>
            </Grid>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;