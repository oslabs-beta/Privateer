import React from 'react';
import Sidenav from './Sidenav';

function Layout({ children }) {
  return (
    <div id="layout">
      <Sidenav />
      <div id="main" title="main-container">
        {children}
      </div>
    </div>
  );
}

export default Layout;
