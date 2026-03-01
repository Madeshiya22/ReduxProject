import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Media Search
          </h1>
          <p className="text-zinc-400 text-center max-w-xl">
            Discover images and videos instantly. Search anything you like.
          </p>
          <Link
            to="/collections"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500"
          >
            Go to Collections
          </Link>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-12">
          <SearchBar />
        </div>

        {query !== "" ? (
          <div className="flex flex-col gap-8">

            <div className="flex justify-center">
              <Tabs />
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 shadow-lg">
              <ResultGrid />
            </div>

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-80 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30">
            <div className="text-6xl mb-4 opacity-30">🔍</div>
            <h2 className="text-xl text-zinc-400">
              Start searching to see results
            </h2>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;