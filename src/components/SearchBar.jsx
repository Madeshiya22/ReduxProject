import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../features/searchSlice";

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
    <div className="w-full px-4 md:px-10 mt-10 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl flex items-center"
      >
        {/* Input */}
        <input
          type="text"
          placeholder="Search images, gifs, videos..."
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
          className="
            flex-1 
            h-16 
            px-6 
            text-lg 
            rounded-l-2xl 
            bg-zinc-900 
            text-white 
            border border-zinc-700 
            focus:outline-none 
            focus:ring-2 
            focus:ring-white/50 
            transition-all
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="h-12 px-10 text-lg font-semibold text-white rounded-r-2xl shadow-[0_8px_0_rgb(124,58,237)] hover:translate-y-1 hover:shadow-[0_4px_0_rgb(124,58,237)] active:translate-y-2 active:shadow-[0_2px_0_rgb(124,58,237)] transition-all duration-150 disabled:opacity-50" >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;