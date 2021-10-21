import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MetricCards = ({ content, text }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={content}
        sx={{ overflowX: 'scroll' }}
      />
      {/* <CardContent>
        <Typography variant="h5" component="div">
          {text}
        </Typography>
      </CardContent> */}
    </Card>
  );
};

export default MetricCards;
