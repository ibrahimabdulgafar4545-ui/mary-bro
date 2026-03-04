import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Info from './pages/Info';
import ReachOut from './pages/ReachOut';
import Profile from './pages/Profile';
import Team from './pages/Team';
import StateManagement from './pages/StateManagement';
import UseState from './pages/UseState';
import UseContext from './pages/UseContext';
import WhyStateManagement from './pages/WhyStateManagement';
import StateTypes from './pages/StateTypes';
import StateBestPractices from './pages/StateBestPractices';
import LocalStorage from './pages/LocalStorage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="reach" element={<ReachOut />} />
        <Route path="profile" element={<Profile name="Larry price" age={25} city="New York" />} />
        <Route path="team" element={<Team />} />
        <Route path="local-storage" element={<LocalStorage />} />
        <Route path="why-state-management" element={<WhyStateManagement />} />
        <Route path="state-types" element={<StateTypes />} />
        <Route path="use-state" element={<UseState />} />
        <Route path="use-context" element={<UseContext />} />
        <Route path="state-best-practices" element={<StateBestPractices />} />
        <Route path="state-management" element={<StateManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
