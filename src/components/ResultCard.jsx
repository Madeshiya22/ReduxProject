import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCollections } from "../features/collectionSlice";

const ResultCard = ({ item }) => { 
   const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 1400);
    return () => clearTimeout(timer);
  }, [showToast]);

  const handleSave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Saving item:", item);
    dispatch(addToCollections(item));
    setShowToast(true);
    }


  return (
    <div className="group relative  overflow-hidden rounded-[10px ] bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative">
        {showToast && (
          <div className="absolute top-3 right-3 z-20 bg-emerald-600 text-white text-xs px-3 py-1 rounded-md shadow-lg">
            Saved to collections
          </div>
        )}
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.type === "photo" ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              src={item.src}
              className="w-full h-60 object-cover"
            ></video>
          )}

          <div className="absolute inset-0  bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
            <h2 className="text-white text-sm font-semibold p-3 truncate">
              {item.title}
            </h2>
            <button
              type="button"
              className="text-white bg-red-500 mb-3 hover:bg-blue-600 px-3 py-1 rounded-md text-sm ml-auto mr-3"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ResultCard;
