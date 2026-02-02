import { useState } from "react";
import { User, Star, LogOut, ChevronDown } from "lucide-react";
import Logo from "../../../public/img/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // 🔥 RESET REDUX + LOCALSTORAGE
    setOpen(false); // tutup dropdown
    navigate("/", { replace: true }); // balik ke login
  };

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
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-gray-700 rounded-lg shadow-lg z-50">
          <ul className="py-2 text-sm text-gray-200">
            <li>
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-800 transition"
              >
                <User className="w-4 h-4" />
                Profile
              </Link>
            </li>

            <li>
              <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-neutral-800 transition text-left">
                <Star className="w-4 h-4 text-yellow-400" />
                Ubah Premium
              </button>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-neutral-800 transition text-left text-red-400"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
