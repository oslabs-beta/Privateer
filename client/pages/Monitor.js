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
          <MetricCards url={"http://localhost:3000/d/8b7a8b326d7a6f1f04244066368c67af/kubernetes-networking-namespace-pods?orgId=1&refresh=10s"} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MetricCards url={"http://localhost:3000/d/09ec8aa1e996d6ffcd6817bbaff4db1b/kubernetes-api-server?orgId=1&refresh=10s"} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MetricCards url={"http://localhost:3000/d/rYdddlPWj/node-exporter-full?orgId=1&refresh=1m"} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Monitor;
