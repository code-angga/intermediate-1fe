// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchTrailer } from "../store/movieSlice";

// const TrailerModal = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { trailerKey, loading } = useSelector((state) => state.movies);

//   useEffect(() => {
//     dispatch(fetchTrailer(id));
//   }, [dispatch, id]);

//   if (loading) return <p className="text-white">Loading trailer...</p>;

//   if (!trailerKey) return <p className="text-white">Trailer tidak ditemukan</p>;

//   return (
//     <div className="bg-black min-h-screen flex items-center justify-center">
//       <iframe
//         className="w-full max-w-5xl aspect-video"
//         src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
//         allow="autoplay; encrypted-media"
//         allowFullScreen
//         title="Trailer"
//       />
//     </div>
//   );
// };

// export default TrailerModal;
