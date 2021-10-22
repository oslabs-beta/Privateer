import { Grid, Paper, Container, Card } from '@mui/material';
import React from 'react';
import MetricCards from '../components/MetricCards';
// temporary mockup images
import bars from '../assets/mockups/bars.png';
import timeSeries from '../assets/mockups/timeSeries.png';
import resources from '../assets/mockups/resources.png';
import gauges from '../assets/mockups/gauges.png';
import MetricTable from '../components/MetricTable';

const Monitor = () => {
  return (
    <Container maxWidth="false" sx={{ marginTop: '1em' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={4}>
          <MetricCards content={bars} text="Bar Graphs" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MetricCards content={timeSeries} text="Time Series" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MetricCards content={resources} text="Resources" />
        </Grid>
        <Grid item xs={12}>
          <MetricCards content={gauges} text="Gauges" />
        </Grid>
        <Grid item xs={12}>
          <MetricTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Monitor;
