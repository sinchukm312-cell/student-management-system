import { useState } from "react";

function AddBedModal({ addBed, close }) {
  const [bed, setBed] = useState({
    id: "",
    ward: "",
    type: "ICU",
    status: "Available",
    patient: "-",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bed.id || !bed.ward) {
      alert("Please fill all required fields");
      return;
    }

    addBed(bed);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white rounded-2xl w-[450px] p-8 shadow-2xl">

        <h2 className="text-3xl font-bold mb-6">
          Add ICU Bed
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Bed ID"
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setBed({ ...bed, id: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Ward"
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setBed({ ...bed, ward: e.target.value })
            }
          />

          <select
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setBed({ ...bed, type: e.target.value })
            }
          >
            <option>ICU</option>
            <option>Ventilator</option>
            <option>Emergency</option>
          </select>

          <select
            className="w-full border rounded-lg p-3"
            onChange={(e) =>
              setBed({ ...bed, status: e.target.value })
            }
          >
            <option>Available</option>
            <option>Occupied</option>
            <option>Reserved</option>
          </select>

          <div className="flex justify-end gap-4 pt-4">

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
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddBedModal;