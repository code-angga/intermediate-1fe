import { useState } from "react";
import { User, Star, LogOut, ChevronDown } from "lucide-react";
import Logo from "../../../public/img/avatar.png";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1"
      >
        <img
          src={Logo}
          alt="avatar"
          className="w-8 h-8 rounded-full border-2 border-gray-700"
        />
        {/* icon bawah */}
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform cursor-pointer ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-gray-700 rounded-lg shadow-lg z-50">
          <ul className="py-2 text-sm text-gray-200">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-800 transition"
              >
                <User className="w-4 h-4" />
                Profil Saya
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-800 transition"
              >
                <Star className="w-4 h-4 text-yellow-400" />
                Ubah Premium
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-800 transition"
              >
                <LogOut className="w-4 h-4 text-red-400" />
                Keluar
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
