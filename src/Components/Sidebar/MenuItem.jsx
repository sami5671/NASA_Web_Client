import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform text-red-600 hover:bg-red-600  hover:text-white ${
          isActive ? "bg-white  text-black" : "text-white"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span className="mx-4 font-extrabold">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
