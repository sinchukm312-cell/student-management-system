function RecentPatients() {
  const patients = [
    {
      id: "P101",
      name: "Rahul Kumar",
      bed: "ICU-05",
      status: "Critical",
    },
    {
      id: "P102",
      name: "Priya Sharma",
      bed: "ICU-08",
      status: "Stable",
    },
    {
      id: "P103",
      name: "Arjun Reddy",
      bed: "ICU-11",
      status: "Critical",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Patients
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-3 text-left">ID</th>
            <th className="text-left">Patient</th>
            <th className="text-left">Bed</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="py-4">{p.id}</td>
              <td>{p.name}</td>
              <td>{p.bed}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    p.status === "Critical"
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentPatients;