import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Services from './pages/Services';
import Messages from './pages/Messages';
import Complaints from './pages/Complaints';
import Transactions from './pages/Transactions';
import NotFound from '../components/NotFound';
import Profile from '@/User/pages/Profile';
import EnquiryMessage from './pages/EnquiryMessage';

function Admin() {
  return (
    <Layout>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="dashboard" replace />} />


        {/* profile redirect */}
        <Route path="profile" element={<Profile />} />

        {/* Main routes */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="services" element={<Services />} />
        <Route path="messages" element={<Messages />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="EnquiryMessage" element={<EnquiryMessage />} />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default Admin;