import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import NotFound from "../components/NotFound";
import Complaints from "./pages/Complaints";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";

function User() {
  // const location = useLocation();
  // const { userData } = location.state || {};
  return (
      <Layout>
        <Routes location={location} key={location.pathname}>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="dashboard" replace />} />

          {/* Main routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="transactions" element={<Transactions />} />

          {/* Profile and settings */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
  );
}

export default User;
