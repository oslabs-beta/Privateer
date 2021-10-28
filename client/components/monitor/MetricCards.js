import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MetricCards = ({ url }) => {
  return (
    <Card>
      <iframe
        width="97%"
        height="1150px"
        src={url}
      />
    </Card>
  );
};

// src={"http://localhost:3000/goto/tJaUhdH7z?orgId=1"}

export default MetricCards;