import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import Hero from "../organisms/Hero";
import Footer from "../organisms/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMelanjutkan,
  fetchTopRated,
  fetchTrending,
  fetchUpcoming,
} from "../../store/movieSlice";
import Card from "../template/Card";
import TrailerModal from "../../pages/TrailerModal";
import { Outlet } from "react-router-dom";

const HomeLayouts = () => {
  const dispatch = useDispatch();
  const { melanjutkan, topRated, trending, upcoming, loading } = useSelector(
    (state) => state.movies,
  );

  useEffect(() => {
    dispatch(fetchMelanjutkan());
    dispatch(fetchTopRated());
    dispatch(fetchTrending());
    dispatch(fetchUpcoming());
  }, [dispatch]);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-slate-800">
      <Navbar />
      <Hero />
      <div className="space-y-4 p-6">
        <section>
          <h2 className="text-white text-xl font-bold mb-6">
            Melanjukan Tonton Film
          </h2>
          <Card movies={melanjutkan} />
        </section>
        <section>
          <h2 className="text-white text-xl font-bold mb-6">
            Top Rating Dan Series Hari ini
          </h2>
          <Card movies={topRated} />
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-6">Film Trending</h2>
          <Card movies={trending} />
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-6">Rilis Baru</h2>
          <Card movies={upcoming} />
        </section>
      </div>

      <TrailerModal />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayouts;
