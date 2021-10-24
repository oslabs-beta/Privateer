import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function CenteredTabs({ drawerWidth }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#121212', borderBottomRightRadius: 20 , borderBottomLeftRadius: 20, height: 75 }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab sx={{width:'25%'}} label="ConfigMap" component={Link} to={'/create/configMap'}/>
        <Tab sx={{width:'25%'}} label="Deploy/Service" component={Link} to={'/create/depServ'}/>
        <Tab sx={{width:'25%'}} label="Secret" component={Link} to={'/create/secret'}/>
        <Tab sx={{width:'25%'}} label="WebApp" component={Link} to={'/create/webApp'}/>
      </Tabs>
    </Box>
  );
}

export default CenteredTabs;