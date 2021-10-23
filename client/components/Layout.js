import React from 'react';
import Header from './Header';
import Sidenav from './Sidenav';

const drawerWidth = 240;

const Layout = ({ children }) => {
  return (
    <div id="layout">
      {/* <Header drawerWidth={drawerWidth} /> */}
      <Sidenav drawerWidth={drawerWidth} />
      <div id="main">{children}</div>
    </div>
  );
};

export default Layout;
