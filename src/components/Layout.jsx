import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text antialiased">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <Outlet />
      </main>

      <footer className="mt-auto py-6 sm:py-8 border-t border-border text-text-muted text-center text-sm sm:text-base">
        <p>
          © {new Date().getFullYear()} My Love Project. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;