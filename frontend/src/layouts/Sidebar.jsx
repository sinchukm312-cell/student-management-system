import {
  FaHospital,
  FaBed,
  FaUsers,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";


function Sidebar() {

  const location = useLocation();


  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHospital />,
    },
    {
      name: "Beds",
      path: "/beds",
      icon: <FaBed />,
    },
    {
      name: "Patients",
      path: "/patients",
      icon: <FaUsers />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaChartBar />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];


  return (

    <div 
      className="
      w-64 
      min-h-screen 
      bg-gradient-to-b 
      from-blue-900 
      to-blue-700
      text-white 
      shadow-2xl
      "
    >


      {/* Logo */}

      <div className="p-8 border-b border-blue-700">


        <h1 className="text-3xl font-bold">
          ICU Care
        </h1>


        <p className="text-sm text-blue-200 mt-2">
          Bed Management System
        </p>


      </div>



      {/* Navigation */}

      <div className="mt-6 px-4">


        {
          menu.map((item) => (

            <Link

              key={item.name}

              to={item.path}

              className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-3 transition-all duration-300

              ${
                location.pathname === item.path
                ? "bg-white text-blue-700 shadow-lg font-semibold"
                : "hover:bg-blue-600"
              }
              
              `}

            >


              <span className="text-xl">
                {item.icon}
              </span>



              <span className="text-lg">
                {item.name}
              </span>



            </Link>

          ))
        }


      </div>




      {/* Footer */}

      <div className="absolute bottom-8 left-6 text-sm text-blue-200">

        <p>
          Version 1.0
        </p>

        <p>
          © 2026 ICU Care
        </p>

      </div>



    </div>

  );
}


export default Sidebar;