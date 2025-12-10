import React, { useState } from "react";
import SectionHero from "../../../public/img/section-hero.png";
import Card from "../template/Card";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <img
          src={SectionHero}
          alt="Duty After School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div> */}
        <div className="relative z-10 px-6 md:px-20 flex flex-col justify-center h-full lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Duty After School
          </h1>
          <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
          <div className="flex items-center gap-3 md:gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 md:px-6 py-2 rounded-lg text-sm md:text-base cursor-pointer">
              Mulai
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 md:px-6 py-2 rounded-lg text-sm md:text-base cursor-pointer">
              Selengkapnya
            </button>
            <span className="border px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">
              18+
            </span>
          </div>
        </div>
      </section>
      {/* Section: Melanjutkan Tonton */}
      <Card />
    </div>
  );
};

export default HeroSection;
