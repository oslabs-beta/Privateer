import { AppBar } from '@mui/material';
import React from 'react';

const Header = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="primary"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        height: 50,
      }}
    />
  );
};

export default Header;
