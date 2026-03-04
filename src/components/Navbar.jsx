import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-nav-bg backdrop-blur-md border-b border-border">
            <div className="text-2xl font-heading font-bold">
                <NavLink to="/" className="text-primary hover:opacity-80 transition-opacity">Marybro</NavLink>
            </div>
            <ul className="flex items-center gap-8 list-none">
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/info" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Info</NavLink>
                </li>
                <li>
                    <NavLink to="/reach" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Reach Out</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/team" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Team</NavLink>
                </li>
                <li>
                    <NavLink to="/local-storage" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>📝 localStorage</NavLink>
                </li>
                <li>
                    <NavLink to="/why-state-management" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Why State?</NavLink>
                </li>
                <li>
                    <NavLink to="/state-types" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>State Types</NavLink>
                </li>
                <li>
                    <NavLink to="/use-state" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>useState</NavLink>
                </li>
                <li>
                    <NavLink to="/use-context" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>useContext</NavLink>
                </li>
                <li>
                    <NavLink to="/state-best-practices" className={({ isActive }) =>
                        `font-medium transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-primary'}`
                    }>Best Practices</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
