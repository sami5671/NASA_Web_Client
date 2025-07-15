import { MdSatelliteAlt } from "react-icons/md";
import Login from "../Login/Login";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/utils";

const Register = () => {
  const [uploadButtonText, setUploadButtonText] = useState(
    "Upload Profile Picture"
  );
  const { createUser } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      const imageData = await imageUpload(image);
      const result = await createUser(email, password);
      console.log(result);

      navigate("/");
      setUploadButtonText("Upload Profile Picture");
      toast.success("SignUp Successful");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 ">
        <div className="w-full max-w-lg bg-slate-900 text-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <MdSatelliteAlt className="text-4xl mx-auto text-red-500 mb-2" />
            <h2 className="text-3xl font-extrabold text-white">
              Create an Account
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Join us and explore the journey 🚀
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Profile Picture
              </label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg px-4 py-6 text-center">
                <label className="cursor-pointer text-red-400 hover:text-red-300 font-medium">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                    onChange={(e) => handleImageChange(e.target.files[0])}
                  />
                  <span className="inline-block px-4 py-2 border border-red-500 rounded-md hover:bg-red-600 hover:text-white transition">
                    {uploadButtonText}
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{" "}
              <span
                onClick={openLoginModal}
                className="text-red-400 font-medium cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>

      <Login
        isLoginOpen={isLoginOpen}
        openLoginModal={openLoginModal}
        closeLoginModal={closeLoginModal}
      />
    </>
  );
};

export default Register;
