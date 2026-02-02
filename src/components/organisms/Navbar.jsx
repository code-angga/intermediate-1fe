import { NavLink } from "react-router-dom";
import Logo from "../../../public/img/Logo.png";
import Dropdown from "./Dropdown";
import GenreMobile from "./series/GenreMobile";

const navClass = ({ isActive }) =>
  `cursor-pointer transition ${
    isActive
      ? "text-red-500 underline underline-offset-8"
      : "hover:text-gray-300 hover:underline"
  }`;

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between w-full relative z-50">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <NavLink to="/homepage">
          <img
            src={Logo}
            alt="Logo"
            className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 ml-10 text-sm font-semibold">
          <li>
            <NavLink to="/series" className={navClass}>
              Series
            </NavLink>
          </li>
          <li>
            <NavLink to="/film" className={navClass}>
              Film
            </NavLink>
          </li>
          <li>
            <NavLink to="/daftarsaya" className={navClass}>
              Daftar Saya
            </NavLink>
          </li>
          <li className="lg:hidden">
            <GenreMobile />
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2">
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
