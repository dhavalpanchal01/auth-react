// Layout.js (Parent Layout Component)

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <div>

      <header>
        <Navbar/>
      </header>

      <main>
      
        <Outlet />

      </main>

      <footer>
        
      </footer>
    </div>
  );
};

export default Layout;
