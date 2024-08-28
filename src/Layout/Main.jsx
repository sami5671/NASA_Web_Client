import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import videoBg from "../assets/video1.mp4";
const Main = () => {
  return (
    <div className="relative min-h-screen md:flex bg-black font-bungee">
      {/* Sidebar Component */}
      <Sidebar />
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute opacity-45 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="flex-1 md:ml-64 ">
        <div className="p-5 relative">
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
