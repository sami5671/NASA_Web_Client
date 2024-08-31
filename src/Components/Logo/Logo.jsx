import { MdSatelliteAlt } from "react-icons/md";

const Logo = () => {
  return (
    <div className="w-full font-bold bg-gradient-to-br from-red-500 to-red-200 text-transparent bg-clip-text hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
      <span className="flex text-3xl items-center gap-2">
        GeoSync
        <MdSatelliteAlt className="text-white animate-spin" />
      </span>
    </div>
  );
};

export default Logo;
