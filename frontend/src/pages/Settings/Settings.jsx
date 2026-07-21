import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUserShield,
  FaBell,
  FaMoon,
  FaDatabase,
} from "react-icons/fa";

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gradient-to-br from-sky-50 via-blue-50 to-white min-h-screen">

      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white hover:bg-blue-600 hover:text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <FaArrowLeft size={20} />
        </button>

        <div>
          <h1 className="text-5xl font-bold text-gray-800">
            Settings
          </h1>
          <p className="text-gray-500 mt-2 text-xl">
            Configure your ICU Bed Management System
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        {/* Administrator */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
            <FaUserShield className="text-blue-600" />
            Administrator
          </h2>

          <input
            type="text"
            defaultValue="Admin"
            className="w-full border rounded-xl p-4 text-xl mb-5"
          />

          <input
            type="email"
            defaultValue="admin@hospital.com"
            className="w-full border rounded-xl p-4 text-xl"
          />
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
            <FaBell className="text-yellow-500" />
            Notifications
          </h2>

          <div className="space-y-6 text-xl">

            <div className="flex justify-between">
              <span>Email Alerts</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex justify-between">
              <span>SMS Alerts</span>
              <input type="checkbox" />
            </div>

            <div className="flex justify-between">
              <span>Emergency Alarm</span>
              <input type="checkbox" defaultChecked />
            </div>

          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
            <FaMoon className="text-indigo-500" />
            Appearance
          </h2>

          <select className="w-full border rounded-xl p-4 text-xl">
            <option>Light Theme</option>
            <option>Dark Theme</option>
          </select>
        </div>

        {/* Backup */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
            <FaDatabase className="text-green-600" />
            Backup & Recovery
          </h2>

          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl transition">
            Backup Database
          </button>
        </div>

      </div>
    </div>
  );
}

export default Settings;