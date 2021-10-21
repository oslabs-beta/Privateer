import { Grid, Paper, Container } from '@mui/material';
import React from 'react';

const Monitor = () => {
  return (
    <Container maxWidth="false">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>4</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Monitor;
