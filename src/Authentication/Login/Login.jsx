import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Logo from "../../Components/Logo/Logo";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const Login = ({ isLoginOpen, closeLoginModal }) => {
  return (
    <>
      <Transition appear show={isLoginOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLoginModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-8 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full lg:w-3/5 transform overflow-hidden rounded-2xl bg-slate-900 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col w-3/4 rounded-md sm:p-10 text-gray-900">
                      <p className="animate-pulse flex items-center justify-center">
                        <Logo />
                      </p>
                      <div className="mt-12">
                        <p className="text-sm text-gray-300">
                          Sign in to access your account
                        </p>
                      </div>
                      <form
                        // onSubmit={handleSubmit}
                        noValidate=""
                        action=""
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                      >
                        <div className="space-y-2 mt-6">
                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm text-white"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              required
                              placeholder="📩 Enter Your Email Here"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                              data-temp-mail-org="0"
                            />
                          </div>
                          <div>
                            <div className="flex justify-between">
                              <label
                                htmlFor="password"
                                className="text-sm mb-2 mt-2 text-white"
                              >
                                Password
                              </label>
                            </div>
                            <input
                              type="password"
                              name="password"
                              autoComplete="current-password"
                              id="password"
                              required
                              placeholder="🔐 Password"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                            />
                          </div>
                        </div>

                        <div>
                          {/* <button
                            type="submit"
                            className="bg-red-800 w-full rounded-md py-3 text-white flex items-center justify-center"
                          >
                            <FaSpinner className="animate-spin mr-2" />
                            Loading...
                          </button> */}

                          <button
                            type="submit"
                            className="bg-red-900 w-full rounded-md py-3 text-white hover:bg-red-700"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                      <div className="space-y-1">
                        <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
                          Forgot password?
                        </button>
                      </div>
                      <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">
                          Login with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                      </div>
                      <div
                        // onClick={handleGoogleSignIn}
                        className="flex justify-center items-center space-x-2 border m-3 p-2 bg-slate-300 cursor-pointer hover:bg-slate-200"
                      >
                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                      </div>
                      <div className="flex justify-center items-center space-x-2 border m-3 p-2 bg-slate-300 cursor-pointer hover:bg-slate-200">
                        <FaGithub size={32} />

                        <p>Continue with GitHub</p>
                      </div>
                      <p className="px-6 text-sm text-center text-gray-100">
                        Don&apos;t have an account yet?
                        <Link
                          to="/signUpPage"
                          className="hover:underline hover:text-red-500 text-gray-400"
                        >
                          {" "}
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Login;
