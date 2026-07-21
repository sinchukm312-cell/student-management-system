import { useState } from "react";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";
import BedTable from "../../components/beds/BedTable";
import AddBedModal from "../../components/beds/AddBedModal";

function Beds() {
  const [showModal, setShowModal] = useState(false);

  const [beds, setBeds] = useState([
    {
      id: "ICU-001",
      ward: "A",
      type: "ICU",
      status: "Available",
      patient: "-",
    },
    {
      id: "ICU-002",
      ward: "A",
      type: "ICU",
      status: "Occupied",
      patient: "Rahul Kumar",
    },
    {
      id: "ICU-003",
      ward: "B",
      type: "Ventilator",
      status: "Reserved",
      patient: "Priya Sharma",
    },
    {
      id: "ICU-004",
      ward: "B",
      type: "ICU",
      status: "Available",
      patient: "-",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredBeds = beds.filter(
    (bed) =>
      bed.id.toLowerCase().includes(search.toLowerCase()) ||
      bed.status.toLowerCase().includes(search.toLowerCase())
  );

  const addBed = (newBed) => {
    setBeds([...beds, newBed]);
    setShowModal(false);
  };

  const deleteBed = (id) => {
    setBeds(beds.filter((bed) => bed.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <div className="flex justify-between items-center mb-8">

            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                ICU Bed Management
              </h1>

              <p className="text-gray-500 mt-2">
                Manage ICU Beds Efficiently
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              + Add Bed
            </button>

          </div>

          <div className="mb-6">

            <input
              type="text"
              placeholder="Search by Bed ID or Status..."
              className="w-full md:w-96 p-3 rounded-xl border shadow"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <BedTable
            beds={filteredBeds}
            deleteBed={deleteBed}
          />

          {showModal && (
            <AddBedModal
              addBed={addBed}
              close={() => setShowModal(false)}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default Beds;