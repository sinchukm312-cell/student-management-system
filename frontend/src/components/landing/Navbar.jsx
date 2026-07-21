import { FaHospitalAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">


        {/* Logo */}

        <Link 
          to="/"
          className="flex items-center gap-3"
        >

          <FaHospitalAlt 
            className="text-4xl text-blue-600"
          />


          <div>

            <h1 className="text-2xl font-bold text-blue-700">
              ICU Care
            </h1>


            <p className="text-sm text-gray-500">
              Bed Management System
            </p>


          </div>


        </Link>




        {/* Navigation */}

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">


          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>



          <li>
            <a
              href="#features"
              className="hover:text-blue-600 transition"
            >
              Features
            </a>
          </li>



          <li>
            <a
              href="#statistics"
              className="hover:text-blue-600 transition"
            >
              Statistics
            </a>
          </li>



          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>


        </ul>





        {/* Login Button */}

        <Link
          to="/login"
          className="
          bg-blue-600 
          hover:bg-blue-700 
          text-white 
          px-6 
          py-3 
          rounded-xl 
          font-medium
          shadow-md
          transition
          "
        >
          Login
        </Link>



      </div>

    </nav>
  );
}


export default Navbar;