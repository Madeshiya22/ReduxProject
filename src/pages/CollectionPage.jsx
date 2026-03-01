import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCollections,
  clearCollections,
} from "../features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.collections.items);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(""), 1400);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const handleRemove = (id) => {
    dispatch(removeFromCollections(id));
    setToastMessage("Item removed");
  };

  const handleClear = () => {
    dispatch(clearCollections());
    setToastMessage("Collections cleared");
  };

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
        {toastMessage && (
          <div className="fixed top-4 right-4 z-30 bg-emerald-600 text-white text-sm px-4 py-2 rounded-md shadow-lg">
            {toastMessage}
          </div>
        )}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">My Collections</h1>
          <div className="flex gap-3">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700"
            >
              Back to Home
            </Link>
            <button
              type="button"
              onClick={handleClear}
              disabled={items.length === 0}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 disabled:opacity-40"
            >
              Clear Collections
            </button>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="h-72 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30 flex items-center justify-center text-zinc-400">
            No saved items yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[10px] bg-zinc-900 shadow-lg"
              >
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.type === "photo" ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-60 object-cover"
                    />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      src={item.src}
                      className="w-full h-60 object-cover"
                    />
                  )}
                </a>

                <div className="p-3 flex items-center gap-2">
                  <h2 className="text-sm font-semibold truncate flex-1">
                    {item.title}
                  </h2>
                  <button
                    type="button"
                    className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;