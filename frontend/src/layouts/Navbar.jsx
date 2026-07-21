import {
  FaBell,
  FaSearch,
  FaMoon,
  FaUserCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="bg-white h-24 shadow-md flex items-center justify-between px-10">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          ICU Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back, Administrator 👋
        </p>
      </div>


      {/* Center Search */}
      <div className="w-[420px]">

        <div className="flex items-center bg-gray-100 rounded-full px-5 py-3">

          <FaSearch className="text-gray-500 mr-3"/>

          <input
            type="text"
            placeholder="Search Patients, Beds..."
            className="bg-transparent outline-none w-full"
          />

        </div>

      </div>



      {/* Right */}
      <div className="flex items-center gap-6">


        {/* Moon icon (kept only as icon) */}
        <FaMoon
          className="text-2xl text-gray-600"
        />



        {/* Notification */}

        <div className="relative">

          <FaBell className="text-2xl cursor-pointer text-gray-600"/>

          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
            3
          </span>

        </div>




        {/* Admin Profile */}

        <Link
          to="/admin-profile"
          className="flex items-center gap-3 cursor-pointer"
        >

         <FaUserCircle
  className="text-5xl text-blue-600"
/>


          <div>

            <h3 className="font-semibold">
              Admin
            </h3>


            <p className="text-sm text-gray-500">
              Hospital Manager
            </p>


          </div>


        </Link>



      </div>


    </div>
  );
}

export default Navbar;