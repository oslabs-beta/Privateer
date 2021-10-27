import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MetricCards = ({ content, text }) => {
  return (
    <Card>
      <iframe
        width="97%"
        height="1150px"
        src={"http://localhost:3000/d/09ec8aa1e996d6ffcd6817bbaff4db1b/kubernetes-api-server?orgId=1&refresh=10s"}
      />
    </Card>
  );
};

// src={"http://localhost:3000/goto/tJaUhdH7z?orgId=1"}

export default MetricCards;