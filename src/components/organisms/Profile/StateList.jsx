import { useDispatch, useSelector } from "react-redux";
import { fetchTrailer, openTrailer } from "../../../store/movieSlice";
import ListCard from "./ListCard";

const ProfileMyList = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.movies.myList);

  const handlePlayTrailer = async (movieId) => {
    try {
      const key = await dispatch(fetchTrailer(movieId)).unwrap();
      dispatch(openTrailer(key));
    } catch (err) {
      console.error("Trailer tidak tersedia");
    }
  };

  if (!myList || myList.length === 0) {
    return (
      <p className="text-gray-400 text-sm">Belum ada film yang disimpan</p>
    );
  }

  return <ListCard movies={myList} onPlayTrailer={handlePlayTrailer} />;
};

export default ProfileMyList;
