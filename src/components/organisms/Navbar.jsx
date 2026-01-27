import Logo from "../../../public/img/Logo.png";
import Dropdown from "./DropDown";
import GenreMobile from "./series/GenreMobile";
const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between w-full relative z-50">
      {/* Kiri: Logo */}
      <div className="flex items-center gap-2.5">
        <div className="">
          <img
            src={Logo}
            alt="Logo"
            className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
          />
        </div>

        {/* Menu Desktop */}
        <ul className="md:flex flex gap-6 md:ml-10  text-sm  font-semibold">
          <li className="cursor-pointer hover:text-gray-300 hover:underline">
            <a href="/Series">Series</a>
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:underline">
            <a href="/Film">Film</a>
          </li>
          <li className="cursor-pointer hover:text-gray-300 hover:underline">
            <a href="/DaftarSaya">Daftar Saya</a>
          </li>
          <li className="cursor-pointer hover:text-gray-300 lg:hidden">
            {/* <a href="/DaftarSaya">Genre</a> */}
            <GenreMobile />
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2">
        {/* <Dropdown /> */}
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
