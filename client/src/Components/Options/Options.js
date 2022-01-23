import React from 'react';
import Grid from '@material-ui/core/Grid';

function Options({children}) {
  return (
  <Grid container>
      Options
      {children}
  </Grid>
  );
}

export default Options;