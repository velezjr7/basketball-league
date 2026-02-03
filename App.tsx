import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SchedulePage from './pages/SchedulePage';
import StandingsPage from './pages/StandingsPage';
import StatsPage from './pages/StatsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<SchedulePage />} />
            <Route path="/posiciones" element={<StandingsPage />} />
            <Route path="/estadisticas" element={<StatsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;