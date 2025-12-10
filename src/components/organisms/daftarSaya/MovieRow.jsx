import React from "react";
import DaftarSaya from "./MovieCard";

const MovieRow = ({ movies }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {movies.map((movie, index) => (
        <DaftarSaya key={index} image={movie.image} title={movie.title} />
      ))}
    </div>
  );
};

export default MovieRow;
