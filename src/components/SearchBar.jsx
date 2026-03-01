import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../features/searchSlice";
import { Search } from "lucide-react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.search);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="w-full flex justify-center mt-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-4xl"
      >
        <div className="flex items-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-full shadow-2xl overflow-hidden focus-within:ring-2 focus-within:ring-purple-500 transition-all duration-300">

          {/* Search Icon */}
          <div className="pl-6 text-gray-400">
            <Search size={20} />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search something amazing..."
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
            className="flex-1 bg-transparent py-4 px-4 text-white text-lg focus:outline-none placeholder-gray-400"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="mr-2 px-8 py-3 rounded-full  from-purple-600 to-pink-500 text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg disabled:opacity-50"
          >
            {loading ? "Searching..." : "Go"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;