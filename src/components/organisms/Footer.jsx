import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Logo from "../../../public/img/Logo.png";

const Footer = () => {
  const [open, setOpen] = useState({ genre: false, bantuan: false });

  return (
    <footer className="bg-neutral-900 text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="hidden md:flex justify-center">
          {/* Logo + Hak Cipta */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 ">
              <img src={Logo} alt="" className="w-28" />
            </div>
            <p className="mt-2 text-sm">@2023 Chill All Rights Reserved.</p>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex justify-center">
            {/* Genre */}
            <div className="gap-5 mx-28">
              <h3 className="text-white font-semibold  mb-3">Genre</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-2 text-sm">
                <a href="#">Aksi</a>
                <a href="#">Drama</a>
                <a href="#">Komedi</a>
                <a href="#">Sains & Alam</a>
                <a href="#">Anak-anak</a>
                <a href="#">Fantasi Ilmiah & Fantasi</a>
                <a href="#">Petualangan</a>
                <a href="#">Thriller</a>
                <a href="#">Anime</a>
                <a href="#">Kejahatan</a>
                <a href="#">Perang</a>
                <a href="#">Romantis</a>
                <a href="#">Britania</a>
                <a href="#">KDrama</a>
              </div>
            </div>

            {/* Bantuan */}
            <div>
              <h3 className="text-white font-semibold mb-3">Bantuan</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Kontak Kami</a>
                </li>
                <li>
                  <a href="#">Privasi</a>
                </li>
                <li>
                  <a href="#">Syarat & Ketentuan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile (Accordion) */}
        <div className="md:hidden space-y-4">
          {/* Genre */}
          <div>
            <button
              onClick={() => setOpen({ ...open, genre: !open.genre })}
              className="flex justify-between w-full items-center py-2 border-b border-gray-700"
            >
              <span>Genre</span>
              <ChevronRight
                className={`transition-transform ${
                  open.genre ? "rotate-90" : ""
                }`}
              />
            </button>
            {open.genre && (
              <div className="grid grid-cols-2 gap-y-2 text-sm mt-2 pl-2">
                <a href="#">Aksi</a>
                <a href="#">Drama</a>
                <a href="#">Komedi</a>
                <a href="#">Sains & Alam</a>
                <a href="#">Anak-anak</a>
                <a href="#">Fantasi Ilmiah & Fantasi</a>
                <a href="#">Petualangan</a>
                <a href="#">Thriller</a>
                <a href="#">Anime</a>
                <a href="#">Kejahatan</a>
                <a href="#">Perang</a>
                <a href="#">Romantis</a>
                <a href="#">Britania</a>
                <a href="#">KDrama</a>
              </div>
            )}
          </div>

          {/* Bantuan */}
          <div>
            <button
              onClick={() => setOpen({ ...open, bantuan: !open.bantuan })}
              className="flex justify-between w-full items-center py-2 border-b border-gray-700"
            >
              <span>Bantuan</span>
              <ChevronRight
                className={`transition-transform ${
                  open.bantuan ? "rotate-90" : ""
                }`}
              />
            </button>
            {open.bantuan && (
              <ul className="space-y-2 text-sm mt-2 pl-2">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Kontak Kami</a>
                </li>
                <li>
                  <a href="#">Privasi</a>
                </li>
                <li>
                  <a href="#">Syarat & Ketentuan</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
