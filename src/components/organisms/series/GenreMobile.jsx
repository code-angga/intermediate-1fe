import React from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const GenreMobile = () => {
  const [open, setOpen] = useState(false);

  const genres = [
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi Ilmiah & Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller",
  ];
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 bg-black/80 text-white sm:hidden rounded-lg flex items-center gap-2 hover:bg-black transition"
      >
        Genre
        <ChevronDown size={18} />
      </button>
      {/* Dropdown Genre */}
      {open && (
        <div className="absolute left-0 mt-2 w-[330px] bg-[#1a1a1a] text-white rounded-lg shadow-xl p-2 grid grid-cols-2 gap-1 z-50">
          {genres.map((g, i) => (
            <div
              key={i}
              className="cursor-pointer px-2 py-1 rounded hover:bg-gray-700"
            >
              {g}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenreMobile;
