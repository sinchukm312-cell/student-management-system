import { FaUserCircle, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function AdminProfile() {

  const navigate = useNavigate();


  return (

    <div className="min-h-screen bg-sky-50 p-10">


      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="
        flex
        items-center
        gap-2
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-5
        py-3
        rounded-xl
        shadow-lg
        transition
        mb-8
        "
      >

        <FaArrowLeft />

        Back

      </button>




      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-10">


        <div className="text-center">


          <FaUserCircle
            className="text-8xl text-blue-600 mx-auto"
          />


          <h1 className="text-3xl font-bold text-gray-800 mt-5">
            Admin Details
          </h1>


        </div>




        <div className="mt-8 space-y-5 text-lg">


          <p>
            <b>Name:</b> Administrator
          </p>


          <p>
            <b>Email:</b> admin@icucare.com
          </p>


          <p>
            <b>Role:</b> Hospital Manager
          </p>


          <p>
            <b>Department:</b> ICU Management
          </p>


          <p>
            <b>Phone:</b> +91 9876543210
          </p>


        </div>


      </div>


    </div>

  );

}


export default AdminProfile;