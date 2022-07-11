import React from 'react';

import { Outlet } from 'react-router-dom';

import MenuBar from '../MenuBar';

import './index.scss';

const Layout = () => {
  return (
    <div className="app">
      <div className="page">
        <MenuBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
