import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_KEY,
  },
});

const limit = (results) => results.slice(0, 9);

export const getMelanjutkan = async () => {
  const { data } = await api.get("/movie/popular");
  return limit(data.results);
  // console.log({ data });
};

export const getTopRated = async () => {
  const { data } = await api.get("/movie/upcoming");
  return limit(data.results);
  // console.log({ data });
};

export const getTrending = async () => {
  const { data } = await api.get("/movie/top_rated");
  return limit(data.results);
  console.log({ data });
};

export const getUpcoming = async () => {
  const { data } = await api.get("/movie/top_rated");
  return limit(data.results);
  // console.log({ data });
};

//export const getMovieTrailer = async (movieId) => {
export const getMovieTrailer = async (movieId) => {
  const { data } = await api.get(`/movie/${movieId}/videos`);

  const trailer = data.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube",
  );

  return trailer ? trailer.key : null;
};
