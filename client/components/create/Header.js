import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#121212',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: 75,
      }}
    >
      <Tabs title="header" value={value} onChange={handleChange} centered>
        <Tab
          sx={{ width: '25%' }}
          label="ConfigMap"
          component={Link}
          to="/create/configMap"
        />
        <Tab
          sx={{ width: '25%' }}
          label="Secret"
          component={Link}
          to="/create/secret"
        />
        <Tab
          sx={{ width: '25%' }}
          label="Deployment"
          component={Link}
          to="/create/deploy"
        />
        <Tab
          sx={{ width: '25%' }}
          label="Service"
          component={Link}
          to="/create/service"
        />
      </Tabs>
    </Box>
  );
}

export default CenteredTabs;
