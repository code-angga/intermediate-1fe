import { useDispatch, useSelector } from "react-redux";
import { closeTrailer } from "../store/movieSlice";

const TrailerModal = () => {
  const dispatch = useDispatch();
  const { isTrailerOpen, trailerKey } = useSelector((state) => state.movies);

  if (!isTrailerOpen || !trailerKey) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl aspect-video">
        <button
          type="button"
          onClick={() => dispatch(closeTrailer())}
          className="absolute -top-10 right-0 text-white text-xl"
        >
          ✖
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default TrailerModal;
