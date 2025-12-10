import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import Banner from "../../../../public/img/Frame799.png";

const GendreDropdown = () => {
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
    <div className="bg-gray-900">
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <img
          src={Banner}
          alt="Duty After School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient bawah */}
        <div className="absolute inset-0 from-black via-black/40 to-transparent"></div>

        {/* Konten */}
        <div className="absolute top-10 left-10 text-white max-w-xl">
          {/* Tombol Genre */}
          <div className="mb-20 hidden sm:flex">
            <div className="relative  items-center">
              <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 bg-black/80 text-white rounded-lg flex items-center gap-2 hover:bg-black transition"
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
          </div>

          {/* Judul */}
          <h1 className="text-5xl font-bold mb-3">Apartemen Dead</h1>

          {/* Deskripsi */}
          <p className="text-gray-200 leading-relaxed mb-8">
            Sekelompok penghuni bekerja sama untuk bertahan hidup di dalam
            sebuah gedung apartemen yang penuh zombie. Sayangnya, virus zombie
            hanya terdapat di dalam area apartemen tersebut dan tidak menyebar
            ke luar kawasan apartemen.
          </p>

          {/* Tombol aksi */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-bold cursor-pointer rounded-lg flex items-center gap-2 hover:bg-blue-700">
              Mulai
            </button>

            <button className="px-6 py-3 bg-white/20 text-white font-semibold cursor-pointer rounded-lg flex items-center gap-2 border border-white/30 hover:bg-white/30">
              <Info size={20} />
              Selengkapnya
            </button>

            {/* Rating */}
            <div className="border border-white/40 px-4 py-2 rounded-full text-sm">
              18+
            </div>
          </div>
        </div>
      </section>

      {/* <Card /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default GendreDropdown;
