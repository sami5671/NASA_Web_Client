import { MdSatelliteAlt } from "react-icons/md";

const Logo = () => {
  return (
    <div className="w-full text-primary hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
      <span className="flex text-3xl items-center gap-2">
        GeoSync
        <MdSatelliteAlt className="text-white animate-pulse" />
      </span>
    </div>
  );
};

export default Logo;
