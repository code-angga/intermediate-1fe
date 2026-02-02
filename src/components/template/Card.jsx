import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPlus } from "react-icons/fa";
import { fetchTrailer, saveMovie } from "../../store/movieSlice";
import toast from "react-hot-toast";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieSection({ title, movies = [] }) {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [activeMovie, setActiveMovie] = useState(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-6 py-8">
      {/* TITLE */}
      <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>

      {/* ARROW */}
      <button
        onClick={() => scroll("left")}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-30
                   bg-black/70 p-2 rounded-full text-white"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-30
                   bg-black/70 p-2 rounded-full text-white"
      >
        <FaChevronRight />
      </button>

      {/* MOVIE LIST */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-40 cursor-pointer"
            onClick={() => setActiveMovie(movie)}
          >
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_URL}${movie.poster_path}`
                  : "/no-image.png"
              }
              className="rounded-lg hover:scale-105 transition"
              alt={movie.title}
            />
          </div>
        ))}
      </div>

      {/* star modal */}
      {activeMovie && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4">
          <div
            className="relative bg-black w-full md:w-1/2 max-h-[90vh]
                       rounded-xl overflow-y-auto"
          >
            {/* CLOSE */}
            <button
              onClick={() => setActiveMovie(null)}
              className="absolute top-4 right-4 z-50
                         bg-black/70 hover:bg-black
                         p-2 rounded-full text-white"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="relative h-[40vh]">
              <img
                src={
                  activeMovie.backdrop_path
                    ? `${IMAGE_URL}${activeMovie.backdrop_path}`
                    : `${IMAGE_URL}${activeMovie.poster_path}`
                }
                className="w-full h-full object-cover rounded-t-xl"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                  {activeMovie.title}
                </h1>

                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={() => dispatch(fetchTrailer(activeMovie.id))}
                    className="flex items-center gap-2
                               bg-blue-600 hover:bg-blue-700
                               text-white px-6 py-2 rounded-full"
                  >
                    <FaPlay /> Mulai
                  </button>

                  <button
                    onClick={() => {
                      dispatch(saveMovie(activeMovie));
                      toast.success("Berhasil menambahkan ke Favorite");
                    }}
                    className="bg-zinc-700 hover:bg-zinc-600
                               text-white px-4 py-2 rounded-full text-xl"
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="flex gap-4 text-gray-300 text-sm">
                  <span>{activeMovie.release_date?.slice(0, 4)}</span>
                  <span className="border border-gray-500 px-2 rounded">
                    16+
                  </span>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="px-6 py-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                {activeMovie.overview || "Deskripsi belum tersedia."}
              </p>

              <div className="text-sm text-gray-400 space-y-1 mb-8">
                <p>
                  <span className="text-gray-500">Rating:</span>{" "}
                  {activeMovie.vote_average}
                </p>
                <p>
                  <span className="text-gray-500">Popularitas:</span>{" "}
                  {activeMovie.popularity}
                </p>
              </div>

              {/* EPISODE */}
              <h2 className="text-white text-lg font-semibold mb-4">Episode</h2>

              <div className="space-y-3">
                {[1, 2, 3].map((ep) => (
                  <div
                    key={ep}
                    className="flex gap-4 bg-zinc-800 hover:bg-zinc-700
                               p-3 rounded-lg"
                  >
                    <div className="text-gray-400 w-5">{ep}</div>

                    <img
                      src={
                        activeMovie.backdrop_path
                          ? `${IMAGE_URL}${activeMovie.backdrop_path}`
                          : `${IMAGE_URL}${activeMovie.poster_path}`
                      }
                      className="w-28 h-16 object-cover rounded"
                    />

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-white text-sm font-medium">
                          Episode {ep}
                        </h3>
                        <span className="text-gray-400 text-xs">30 min</span>
                      </div>

                      <p className="text-gray-400 text-xs line-clamp-2">
                        Deskripsi singkat episode {ep}.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* and modal */}
    </div>
  );
}
