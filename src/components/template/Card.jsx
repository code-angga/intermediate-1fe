import React from "react";

const Card = () => {
  return (
    <div className="bg-gray-900 text-white">
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
    </div>
  );
};
//  Reusable Section Component
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

export default Card;
