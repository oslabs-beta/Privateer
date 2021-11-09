import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

const CenteredTabs = () => {

  const [value, setValue] = useState(0);

  interface handleChangeInterface {
    (_: any, newValue: any): void
  }

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#121212', borderBottomRightRadius: 20 , borderBottomLeftRadius: 20, height: 75 }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab sx={{width:'25%'}} label="ConfigMap" component={Link} to={'/create/configMap'}/>
        <Tab sx={{width:'25%'}} label="Secret" component={Link} to={'/create/secret'}/>
        <Tab sx={{width:'25%'}} label="Deployment" component={Link} to={'/create/deploy'}/>
        <Tab sx={{width:'25%'}} label="Service" component={Link} to={'/create/service'}/>
      </Tabs>
    </Box>
  );
};

export default CenteredTabs;