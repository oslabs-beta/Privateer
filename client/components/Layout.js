import React from 'react';
import Sidenav from './Sidenav';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Sidenav />
      <div id="main">{children}</div>
    </div>
  );
};

export default Layout;
