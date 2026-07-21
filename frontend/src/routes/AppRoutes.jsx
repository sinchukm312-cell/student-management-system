import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Beds from "../pages/Beds/Beds";
import Patients from "../pages/Patients/Patients";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";
import AdminProfile from "../pages/AdminProfile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ICU Bed Management */}
        <Route path="/beds" element={<Beds />} />

        <Route
  path="/admin-profile"
  element={<AdminProfile />}
/>

        {/* Patient Management */}
        <Route path="/patients" element={<Patients />} />

        {/* Reports */}
        <Route path="/reports" element={<Reports />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen bg-gray-100">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-600">404</h1>
                <p className="text-2xl mt-4 text-gray-700">
                  Page Not Found
                </p>
              </div>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;