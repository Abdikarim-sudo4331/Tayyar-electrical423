import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminApp from './components/admin/AdminApp';
import App from './App';

const MainApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminApp />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default MainApp;