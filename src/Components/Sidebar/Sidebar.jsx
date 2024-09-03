import { RiLogoutCircleLine } from "react-icons/ri";
import Logo from "../Logo/Logo";
import MenuItem from "./MenuItem";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdSatelliteAlt } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Login from "../../Authentication/Login/Login";

const Sidebar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLoginModal = () => {
    setIsLoginOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const loggedin = false;
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden ">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <MdMenu className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-slate-950 opacity-60 border-r-red-500 border-r-2 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Logo />
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-1 ">
            {/* If a user is host */}
            {/* {role === "host" ? <ToggleBtn toggleHandler={toggleHandler} /> : ""} */}
            <nav>
              {/* {isAdmin ? (
                <AdminMenu />
              ) : isModerator ? (
                <ModeratorMenu />
              ) : (
                <UserMenu />
              )}

              <MenuItem icon={FaHome} label="Home" address="/" />
              <MenuItem
                icon={IoCarSport}
                label="All Cars"
                address="/carCollection"
              /> */}

              <MenuItem icon={FaHome} label="Home" address="/" />
              <MenuItem
                icon={MdSatelliteAlt}
                label="Track Land-Sat"
                address="/trackLandSat"
              />
              <MenuItem
                icon={FaMapLocationDot}
                label="Select Location"
                address="/selectLocation"
              />
              <MenuItem
                icon={IoMdNotifications}
                label="Notifications"
                address="/notification"
              />
            </nav>
          </div>
        </div>
        <div className="">
          <hr className="border-red-600 border-2" />

          <MenuItem icon={IoSettingsSharp} label="Profile" address="/profile" />
          {loggedin === false ? (
            <button
              onClick={openLoginModal}
              className="flex w-full items-center px-4 py-2 mt-5 text-gray-300 hover:bg-white hover:text-black transition-colors duration-300 transform"
            >
              <RiLogoutCircleLine />
              <span className="mx-4 font-medium">Login</span>
            </button>
          ) : (
            <button
              // onClick={logOut}
              className="flex w-full items-center px-4 py-2 mt-5 text-gray-300 hover:bg-white hover:text-black transition-colors duration-300 transform"
            >
              <RiLogoutCircleLine />
              <span className="mx-4 font-medium">Logout</span>
            </button>
          )}
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

export default Sidebar;
