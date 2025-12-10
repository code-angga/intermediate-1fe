import React from "react";
import MovieRow from "./MovieRow";

const MovieCard = ({ image, title }) => {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
        />

        {/* Badge Episode Baru */}
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          Episode Baru
        </span>
      </div>
    </div>
  );
};
export default MovieCard;
