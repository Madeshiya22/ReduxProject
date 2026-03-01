import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      
      {/* Media */}
      <div className="relative">
        {item.type === "photo" ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <video
            autoPlay loop muted
            src={item.src}
            className="w-full h-60 object-cover"
          >
          </video>
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
          <h2 className="text-white text-sm font-semibold p-3 truncate">
            {item.title}
          </h2>
        </div>
      </div>

    </div>
  );
};

export default ResultCard;