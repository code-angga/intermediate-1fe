import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchTrailer, saveMovie } from "../../store/movieSlice";
import { useNavigate } from "react-router-dom";
// import { FaPlay } from "react-icons/fa";

const Card = ({ movies = [] }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  if (!Array.isArray(movies)) return null;

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* ARROW LEFT */}
      <div
        role="button"
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-black/70 p-2 rounded-full text-white cursor-pointer"
      >
        <FaChevronLeft />
      </div>

      {/* ARROW RIGHT */}
      <div
        role="button"
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-black/70 p-2 rounded-full text-white cursor-pointer"
      >
        <FaChevronRight />
      </div>

      {/* SCROLL LIST */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide px-12"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative group min-w-[160px] flex-shrink-0"
          >
            {/* POSTER */}
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_URL}${movie.poster_path}`
                  : "/no-image.png"
              }
              alt={movie.title}
              className="w-full h-56 object-cover rounded-lg transition group-hover:opacity-30"
            />

            {/* HOVER POPUP */}
            <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-[280px] bg-zinc-900 rounded-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition z-20">
              <img
                src={
                  movie.backdrop_path
                    ? `${IMAGE_URL}${movie.backdrop_path}`
                    : `${IMAGE_URL}${movie.poster_path}`
                }
                className="w-full h-36 object-cover rounded-t-xl"
              />

              <div className="p-3 pointer-events-auto">
                <h3 className="text-white font-semibold text-sm mb-2 truncate">
                  {movie.title}
                </h3>

                <div className="flex gap-2">
                  {/* PLAY */}
                  <div
                    role="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(fetchTrailer(movie.id));
                    }}
                    className="flex items-center gap-1 bg-red-600 text-white text-xs px-3 py-1 rounded cursor-pointer hover:bg-red-700"
                  >
                    <FaPlay /> Tonton
                  </div>

                  {/* SAVE */}
                  <div
                    role="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(saveMovie(movie));
                    }}
                    className="flex items-center gap-1 bg-gray-700 text-white text-xs px-3 py-1 rounded cursor-pointer hover:bg-gray-800"
                  >
                    <FaPlus /> Simpan
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white text-sm mt-2 truncate">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
