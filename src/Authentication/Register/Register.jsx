import { FcGoogle } from "react-icons/fc";
import { MdSatelliteAlt } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import Login from "../Login/Login";
import { useState } from "react";

const Register = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 text-slate-100">
        <div className="">
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              SignUp with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            // onClick={handleGoogleSignIn}
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-black hover:text-white"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-black hover:text-white">
            <FaGithub size={32} />

            <p>Continue with GitHub</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?
            <button
              onClick={openLoginModal}
              className="hover:underline hover:text-red-500 text-gray-100"
            >
              Login
            </button>
          </p>
        </div>

        {/* for Signup */}
        <div className="">
          <div className="flex justify-center items-center min-h-screen border-l-2 shadow-md">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-900 ">
              <div className="mb-8">
                <h1 className="my-3 text-4xl font-bold bg-gradient-to-br from-red-500 to-cyan-200 text-transparent bg-clip-text">
                  Sign Up
                </h1>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  Welcome to GeoSync <MdSatelliteAlt className="animate-spin" />
                </p>
              </div>
              <form
                // onSubmit={handleSubmit}
                noValidate=""
                action=""
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name Here"
                      className="lg:w-[400px] px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm  text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter Your Email Here"
                      className="lg:w-[400px] px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm mb-2 text-white"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      autoComplete="new-password"
                      id="password"
                      required
                      placeholder="*******"
                      className="lg:w-[400px]  px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                    />
                  </div>
                </div>
                <div className=" w-full  m-auto rounded-lg">
                  <div className="file_upload py-2 relative border-4 border-dashed border-red-300">
                    <div className="flex flex-col w-max mx-auto text-center ">
                      <label>
                        <input
                          //   onChange={(e) => handleImageChange(e.target.files[0])}
                          className="text-sm cursor-pointer hidden"
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          hidden
                        />
                        <div className="bg-red-800 hover:animate-pulse text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-red-700">
                          {/* {uploadButtonText} */} Upload Your Image
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  {/* <button
                   type="submit"
                   className="bg-red-800 lg:w-[400px] rounded-md py-3 text-white flex items-center justify-center"
                 >
                   <ImSpinner9 className="animate-spin" />
                 </button> */}

                  <button
                    type="submit"
                    className="bg-red-800 lg:w-[400px] rounded-md py-3 text-white hover:bg-red-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* ....................... */}
            </div>
          </div>
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
