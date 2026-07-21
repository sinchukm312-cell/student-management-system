import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHospital, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login
    // Later this will connect to the backend API
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-sky-50 to-white px-4">

      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10">

        <div className="flex flex-col items-center mb-8">

          <div className="bg-blue-600 p-5 rounded-full mb-4">
            <FaHospital className="text-white text-4xl" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            ICU Bed Management
          </h1>

          <p className="text-gray-500 mt-2">
            Hospital Administrator Login
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="admin@hospital.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 mt-8">
          © 2026 ICU Bed Management System
        </p>

      </div>

    </div>
  );
}

export default Login;