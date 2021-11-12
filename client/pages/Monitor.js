import { Card, Container } from '@mui/material';
import React from 'react';

function Monitor() {
  return (
    <Container
      maxWidth="false"
      title="monitor-container"
      sx={{ marginTop: '1em' }}
    >
      <Card>
        <iframe width="100%" height="1080px" src="http://localhost:3000" />
      </Card>
    </Container>
  );
}

export default Monitor;
