import { FaEdit, FaTrash } from "react-icons/fa";

function BedTable({ beds, deleteBed }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";
      case "Occupied":
        return "bg-red-100 text-red-700";
      case "Reserved":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-4 text-left">Bed ID</th>
            <th className="p-4 text-left">Ward</th>
            <th className="p-4 text-left">Type</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Patient</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {beds.map((bed) => (
            <tr
              key={bed.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-4 font-semibold">{bed.id}</td>

              <td className="p-4">{bed.ward}</td>

              <td className="p-4">{bed.type}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                    bed.status
                  )}`}
                >
                  {bed.status}
                </span>
              </td>

              <td className="p-4">{bed.patient}</td>

              <td className="p-4">
                <div className="flex justify-center gap-4">

                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit size={18} />
                  </button>

                  <button
                    onClick={() => deleteBed(bed.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash size={18} />
                  </button>

                </div>
              </td>
            </tr>
          ))}

          {beds.length === 0 && (
            <tr>
              <td
                colSpan="6"
                className="text-center p-8 text-gray-500"
              >
                No ICU Beds Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BedTable;