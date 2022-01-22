import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createTheme({
    palette: {
        primary: {
            main: "#e3cfa1",
        },
        secondary: {
            main: orange[500],
        },
    },
});

export default theme;
