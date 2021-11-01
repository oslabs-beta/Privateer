import { Grid, Container } from '@mui/material';
import React from 'react';
import MetricCards from '../components/monitor/MetricCards';
import MetricTable from '../components/monitor/MetricTable';
// temporary mockup
import monitorData from '../assets/mockups/monitorData';

const Monitor = () => {
  return (
    <Container
      maxWidth="false"
      title="monitor-container"
      sx={{ marginTop: '1em' }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} lg={4}>
          <MetricCards />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MetricCards />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MetricCards />
        </Grid>
        <Grid item xs={12}>
          <MetricCards />
        </Grid>
        <Grid item xs={12}>
          <MetricTable data={monitorData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Monitor;
