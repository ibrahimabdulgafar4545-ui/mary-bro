import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-bg text-text">
            <Navbar />
            <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-8">
                <Outlet />
            </main>
            <footer className="py-8 text-center border-t border-border text-text-muted">
                <p>&copy; {new Date().getFullYear()} My Love Project. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
