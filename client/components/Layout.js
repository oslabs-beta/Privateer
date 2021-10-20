import React from 'react';
import Sidenav from './Sidenav';

const Layout = ({ children }) => {
  return (
    <div id="main">
      <Sidenav />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
