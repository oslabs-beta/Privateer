import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface MetricCardsInterface {
  url: string;
}

const MetricCards: React.FC <MetricCardsInterface> = ({ url }) => {
  return (
    <Card>
      <iframe
        width="100%"
        height="1150px"
        src={url}
      />
    </Card>
  );
};

// src={"http://localhost:3000/goto/tJaUhdH7z?orgId=1"}

export default MetricCards;