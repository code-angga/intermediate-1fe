import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchTrailer, saveMovie } from "../../store/movieSlice";

const Card = ({ movies = [] }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  const [activeMovie, setActiveMovie] = useState(null);

  if (!Array.isArray(movies)) return null;

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* ARROW (DESKTOP ONLY) */}
      <div
        onClick={() => scroll("left")}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-40
                   bg-black/70 p-2 rounded-full text-white cursor-pointer"
      >
        <FaChevronLeft />
      </div>

      <div
        onClick={() => scroll("right")}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-40
                   bg-black/70 p-2 rounded-full text-white cursor-pointer"
      >
        <FaChevronRight />
      </div>

      {/* MOVIE LIST */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-12"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative group flex-shrink-0
                       min-w-[120px] sm:min-w-[150px] md:min-w-[180px]"
          >
            {/* POSTER */}
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_URL}${movie.poster_path}`
                  : "/no-image.png"
              }
              alt={movie.title}
              onClick={() => setActiveMovie(movie)}
              className="w-full
                         h-44 sm:h-52 md:h-56
                         object-cover rounded-lg
                         transition
                         cursor-pointer
                         md:group-hover:opacity-40"
            />

            {/* HOVER CARD (DESKTOP ONLY) */}
            <div
              className="hidden md:block
                         absolute -top-10 left-1/2 -translate-x-1/2
                         w-[260px] lg:w-[300px]
                         bg-zinc-900 rounded-xl
                         opacity-0 scale-95
                         group-hover:opacity-100 group-hover:scale-100
                         transition z-50"
            >
              <img
                src={
                  movie.backdrop_path
                    ? `${IMAGE_URL}${movie.backdrop_path}`
                    : `${IMAGE_URL}${movie.poster_path}`
                }
                className="w-full h-36 object-cover rounded-t-xl"
              />

              <div className="p-3">
                <h3 className="text-white text-sm font-semibold truncate mb-2">
                  {movie.title}
                </h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => dispatch(fetchTrailer(movie.id))}
                    className="flex items-center gap-1 bg-red-600 text-white
                               text-xs px-3 py-1 rounded hover:bg-red-700"
                  >
                    <FaPlay /> Tonton
                  </button>

                  <button
                    onClick={() => dispatch(saveMovie(movie))}
                    className="flex items-center gap-1 bg-gray-700 text-white
                               text-xs px-3 py-1 rounded hover:bg-gray-800"
                  >
                    <FaPlus /> Simpan
                  </button>
                </div>
              </div>
            </div>

            <p className="text-white text-xs sm:text-sm mt-2 truncate">
              {movie.title}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL MOBILE */}
      {activeMovie && (
        <div
          className="fixed inset-0 z-[999] bg-black/80
                     flex items-center justify-center p-4"
          onClick={() => setActiveMovie(null)}
        >
          <div
            className="bg-zinc-900 w-full max-w-md rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                activeMovie.backdrop_path
                  ? `${IMAGE_URL}${activeMovie.backdrop_path}`
                  : `${IMAGE_URL}${activeMovie.poster_path}`
              }
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-white font-bold mb-3">{activeMovie.title}</h2>

              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(fetchTrailer(activeMovie.id))}
                  className="flex-1 bg-red-600 text-white py-2 rounded"
                >
                  ▶ Tonton
                </button>

                <button
                  onClick={() => dispatch(saveMovie(activeMovie))}
                  className="bg-gray-700 px-4 rounded text-white"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => setActiveMovie(null)}
                className="mt-4 w-full text-gray-400 text-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
