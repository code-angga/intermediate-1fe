import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MovieRow from "./MovieRow";

const DaftarSaya = () => {
  const movies = [
    { image: "../../../../public/img/Frame777.png", title: "Movie 1" },
    { image: "../../../../public/img/Frame788.png", title: "Movie 2" },
    { image: "../../../../public/img/Frame799.png", title: "Movie 3" },
    { image: "../../../../public/img/Frame79.png", title: "Movie 4" },
    { image: "../../../../public/img/Frame7666.png", title: "Movie 5" },
    { image: "../../../../public/img/Frame7888.png", title: "Movie 6" },
    { image: "../../../../public/img/Frame744.png", title: "Movie 7" },
    { image: "../../../../public/img/Frame766.png", title: "Movie 8" },
    { image: "../../../../public/img/Frame766.png", title: "Movie 8" },
    { image: "../../../../public/img/Frame766.png", title: "Movie 8" },
    { image: "../../../../public/img/Frame766.png", title: "Movie 8" },
    { image: "../../../../public/img/Frame766.png", title: "Movie 8" },
  ];
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      <Navbar />
      <div className="px-5 py-6">
        <h1 className="text-xl font-bold mb-2">Daftar Saya</h1>

        <MovieRow movies={movies} />
      </div>
      <Footer />
    </div>
  );
};

export default DaftarSaya;
