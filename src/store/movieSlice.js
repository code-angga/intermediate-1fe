import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getMelanjutkan,
  getTopRated,
  getTrending,
  getUpcoming,
  getMovieTrailer,
} from "../service/api";

/* ================= THUNK ================= */

export const fetchMelanjutkan = createAsyncThunk(
  "movies/melanjutkan",
  async () => await getMelanjutkan(),
);

export const fetchTopRated = createAsyncThunk(
  "movies/topRated",
  async () => await getTopRated(),
);

export const fetchTrending = createAsyncThunk(
  "movies/trending",
  async () => await getTrending(),
);

export const fetchUpcoming = createAsyncThunk(
  "movies/upcoming",
  async () => await getUpcoming(),
);

export const fetchTrailer = createAsyncThunk(
  "movies/fetchTrailer",
  async (movieId) => await getMovieTrailer(movieId),
);

/* ================= SLICE ================= */

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    melanjutkan: [],
    topRated: [],
    trending: [],
    upcoming: [],
    loading: false,

    trailerKey: null,
    isTrailerOpen: false,

    savedMovies: [],
  },
  reducers: {
    closeTrailer: (state) => {
      state.trailerKey = null;
      state.isTrailerOpen = false;
    },
    saveMovie: (state, action) => {
      const exist = state.savedMovies.find((m) => m.id === action.payload.id);
      if (!exist) state.savedMovies.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      /* ===== TRAILER ===== */
      .addCase(fetchTrailer.fulfilled, (state, action) => {
        state.loading = false;
        state.trailerKey = action.payload;
        state.isTrailerOpen = true;
      })

      /* ===== GLOBAL LOADING ===== */
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        },
      )

      /* ===== MOVIE LIST ===== */
      .addMatcher(
        (action) =>
          action.type.endsWith("/fulfilled") &&
          !action.type.includes("fetchTrailer"),
        (state, action) => {
          state.loading = false;

          if (action.type.includes("melanjutkan"))
            state.melanjutkan = action.payload;

          if (action.type.includes("topRated")) state.topRated = action.payload;

          if (action.type.includes("trending")) state.trending = action.payload;

          if (action.type.includes("upcoming")) state.upcoming = action.payload;
        },
      );
  },
});

export const { closeTrailer, saveMovie } = movieSlice.actions;
export default movieSlice.reducer;
