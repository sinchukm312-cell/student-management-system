import { useState } from "react";

function AddPatientModal({ addPatient, close }) {
  const [patient, setPatient] = useState({
    id: "",
    name: "",
    age: "",
    gender: "Male",
    disease: "",
    bed: "",
    status: "Admitted",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !patient.id ||
      !patient.name ||
      !patient.age ||
      !patient.disease ||
      !patient.bed
    ) {
      alert("Please fill all fields.");
      return;
    }

    addPatient(patient);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-8 w-[500px] shadow-2xl">

        <h2 className="text-3xl font-bold mb-6">
          Admit Patient
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Patient ID"
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setPatient({ ...patient, id: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Patient Name"
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setPatient({ ...patient, name: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Age"
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setPatient({ ...patient, age: e.target.value })
            }
          />

          <select
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setPatient({ ...patient, gender: e.target.value })
            }
          >
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="text"
            placeholder="Disease"
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setPatient({ ...patient, disease: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Assigned Bed"
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setPatient({ ...patient, bed: e.target.value })
            }
          />

          <select
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setPatient({ ...patient, status: e.target.value })
            }
          >
            <option>Admitted</option>
            <option>Critical</option>
            <option>Recovering</option>
          </select>

          <div className="flex justify-end gap-4 mt-6">

            <button
              type="button"
              onClick={close}
              className="px-5 py-2 rounded-lg bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white"
            >
              Admit
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddPatientModal;