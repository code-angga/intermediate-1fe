import React, { useState } from "react";
import SectionHero from "../../../public/img/section-hero.png";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* <Navbar /> */}

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
      <Section title="Melanjutkan Tonton Film">
        <CardRow
          images={[
            "/../public/img/Frame66.png",
            "/../public/img/Frame666.png",
            "/../public/img/Frame67.png",
            "/../public/img/Frame68.png",
          ]}
        />
      </Section>
      {/* Section: Top Rating */}
      <Section title="Top Rating Film dan Series Hari ini">
        <CardGrid
          images={[
            "/../public/img/Frame68.png",
            "/../public/img/Frame74.png",
            "/../public/img/Frame76.png",
            "/../public/img/Frame77.png",
          ]}
        />
      </Section>
      {/* Section: Film Trending */}
      <Section title="Film Trending">
        <CardGrid
          images={[
            "/../public/img/Frame78.png",
            "/../public/img/Frame79.png",
            "/../public/img/Frame666.png",
            "/../public/img/Frame744.png",
          ]}
        />
      </Section>
      {/* Section: Rilis Baru */}
      <Section title="Rilis Baru">
        <CardGrid
          images={[
            "/../public/img/Frame766.png",
            "/../public/img/Frame777.png",
            "/../public/img/Frame788.png",
            "/../public/img/Frame799.png",
          ]}
        />
      </Section>
      {/* Footer */}

      {/* <Footer></Footer> */}
    </div>
  );
};

// Reusable Section Component
function Section({ title, children }) {
  return (
    <div className="px-6 md:px-20 py-10">
      <h2 className="text-lg md:text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}

// Horizontal Cards (responsive scroll)
function CardRow({ images }) {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
      {/*   flex space-x-4 overflow-x-auto scrollbar-hide */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="poster"
          className="w-full h-32 md:h-40 object-cover rounded-lg"
        />
      ))}
    </div>
  );
}

// Grid Cards (responsive)
function CardGrid({ images }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="poster"
          className="w-full h-48 md:h-60 object-cover rounded-lg"
        />
      ))}
    </div>
  );
}

export default HeroSection;
