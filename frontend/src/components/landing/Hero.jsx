import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleEmergency = () => {
    alert("🚨 Emergency ICU Support Activated!");
  };

  return (
    <section className="pt-40 pb-24 bg-gradient-to-r from-blue-50 to-cyan-100">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold text-blue-800 leading-tight">
            Smart ICU
            <br />
            Bed Management
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-8">
            Monitor ICU bed availability, admit patients,
            manage occupancy, and generate reports through
            one modern healthcare dashboard.
          </p>

          <div className="mt-10 flex gap-5">

            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              Get Started
            </button>

            <button
              onClick={handleEmergency}
              className="border-2 border-red-500 text-red-600 px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition"
            >
              Emergency
            </button>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900"
            alt="Hospital ICU"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;