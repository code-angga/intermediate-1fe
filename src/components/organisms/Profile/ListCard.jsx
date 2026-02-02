import { useDispatch, useSelector } from "react-redux";
import {
  removeMovie,
  fetchTrailer,
  openTrailer,
} from "../../../store/movieSlice";
import toast from "react-hot-toast";
import TrailerModal from "../../../pages/TrailerModal";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const ListCard = ({ onPlayTrailer }) => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.movies.myList);

  // fallback supaya tidak error
  const handlePlayTrailer =
    typeof onPlayTrailer === "function"
      ? onPlayTrailer
      : async (movieId) => {
          const key = await dispatch(fetchTrailer(movieId)).unwrap();
          dispatch(openTrailer(key));
        };

  if (!Array.isArray(myList) || myList.length === 0) {
    return (
      <p className="text-gray-400 text-sm">Belum ada film yang disimpan</p>
    );
  }

  return (
    <>
      <div className="bg-black p-3">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-white text-sm">Daftar Saya</h3>
          <span className="text-xs text-gray-400 cursor-pointer hover:underline">
            Tampilkan Semua
          </span>
        </div>

        {/* LIST */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {myList.map((movie) => (
            <div
              key={movie.id}
              className="relative min-w-[300px] min-h-80 bg-black rounded-lg"
            >
              {/* POSTER */}
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_URL}${movie.poster_path}`
                    : "/no-image.png"
                }
                onClick={() => handlePlayTrailer(movie.id)}
                alt={movie.title}
                className="w-full h-52 object-cover rounded-lg opacity-90
                           hover:opacity-100 transition cursor-pointer"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 rounded-lg pointer-events-none" />

              {/* REMOVE */}
              <button
                onClick={() => {
                  dispatch(removeMovie(movie.id));
                  toast.success("Favorite Berhasil Dihapus");
                }}
                className="absolute top-1 right-1 bg-black/80 text-white
                           text-xs w-5 h-5 flex items-center justify-center
                           rounded-full hover:bg-black transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <TrailerModal />
    </>
  );
};

export default ListCard;
