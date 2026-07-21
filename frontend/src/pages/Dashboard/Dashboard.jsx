import { useNavigate } from "react-router-dom";

import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";

import StatCard from "../../components/dashboard/StatCard";
import BedChart from "../../components/dashboard/BedChart";
import RecentPatients from "../../components/dashboard/RecentPatients";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div onClick={() => navigate("/beds")} className="cursor-pointer">
              <StatCard
                title="Total Beds"
                value="120"
                color="bg-gradient-to-r from-blue-500 to-blue-700"
              />
            </div>

            <div onClick={() => navigate("/beds")} className="cursor-pointer">
              <StatCard
                title="Available Beds"
                value="42"
                color="bg-gradient-to-r from-green-500 to-green-700"
              />
            </div>

            <div onClick={() => navigate("/beds")} className="cursor-pointer">
              <StatCard
                title="Occupied Beds"
                value="71"
                color="bg-gradient-to-r from-red-500 to-red-700"
              />
            </div>

            <div onClick={() => navigate("/beds")} className="cursor-pointer">
              <StatCard
                title="Reserved Beds"
                value="7"
                color="bg-gradient-to-r from-yellow-400 to-orange-500"
              />
            </div>

          </div>

          {/* Charts & Patients */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">

            <BedChart />

            <RecentPatients />

          </div>

          {/* Quick Actions */}
          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Quick Actions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Add ICU Bed */}
              <button
                onClick={() => navigate("/beds")}
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white rounded-2xl p-5 text-lg font-semibold shadow-lg transition duration-300"
              >
                ➕ Add ICU Bed
              </button>

              {/* Admit Patient */}
              <button
                onClick={() => navigate("/patients")}
                className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white rounded-2xl p-5 text-lg font-semibold shadow-lg transition duration-300"
              >
                👨‍⚕️ Admit Patient
              </button>

              {/* Generate Report */}
              <button
                onClick={() => navigate("/reports")}
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:scale-105 text-white rounded-2xl p-5 text-lg font-semibold shadow-lg transition duration-300"
              >
                📄 Generate Report
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;