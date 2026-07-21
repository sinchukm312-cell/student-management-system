import { FaTrash, FaUserInjured } from "react-icons/fa";

function PatientTable({ patients, dischargePatient }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Critical":
        return "bg-red-100 text-red-700";
      case "Admitted":
        return "bg-blue-100 text-blue-700";
      case "Recovering":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4 text-left">Patient ID</th>
            <th className="p-4 text-left">Patient</th>
            <th className="p-4 text-left">Age</th>
            <th className="p-4 text-left">Gender</th>
            <th className="p-4 text-left">Disease</th>
            <th className="p-4 text-left">Bed</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{patient.id}</td>

              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <FaUserInjured className="text-blue-600" />
                  </div>
                  {patient.name}
                </div>
              </td>

              <td className="p-4">{patient.age}</td>

              <td className="p-4">{patient.gender}</td>

              <td className="p-4">{patient.disease}</td>

              <td className="p-4">{patient.bed}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                    patient.status
                  )}`}
                >
                  {patient.status}
                </span>
              </td>

              <td className="p-4 text-center">
                <button
                  onClick={() => dischargePatient(patient.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}

          {patients.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center p-8">
                No Patients Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;