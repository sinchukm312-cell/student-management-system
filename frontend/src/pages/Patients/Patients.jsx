import { useState } from "react";
import Sidebar from "../../layouts/Sidebar";
import Navbar from "../../layouts/Navbar";
import PatientTable from "../../components/patients/PatientTable";
import AddPatientModal from "../../components/patients/AddPatientModal";

function Patients() {
  const [showModal, setShowModal] = useState(false);

  const [patients, setPatients] = useState([
    {
      id: "P001",
      name: "Rahul Kumar",
      age: 45,
      gender: "Male",
      disease: "Heart Attack",
      bed: "ICU-002",
      status: "Admitted",
    },
    {
      id: "P002",
      name: "Priya Sharma",
      age: 31,
      gender: "Female",
      disease: "Stroke",
      bed: "ICU-003",
      status: "Critical",
    },
    {
      id: "P003",
      name: "Arjun Reddy",
      age: 56,
      gender: "Male",
      disease: "Covid-19",
      bed: "ICU-005",
      status: "Recovering",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter(
    (patient) =>
      patient.id.toLowerCase().includes(search.toLowerCase()) ||
      patient.name.toLowerCase().includes(search.toLowerCase())
  );

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
    setShowModal(false);
  };

  const dischargePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Patient Management
              </h1>

              <p className="text-gray-500 mt-2">
                Admit, Monitor & Discharge ICU Patients
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
            >
              + Admit Patient
            </button>
          </div>

          <input
            type="text"
            placeholder="Search Patient ID or Name..."
            className="w-full md:w-96 border rounded-xl p-3 shadow mb-6"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <PatientTable
            patients={filteredPatients}
            dischargePatient={dischargePatient}
          />

          {showModal && (
            <AddPatientModal
              addPatient={addPatient}
              close={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Patients;