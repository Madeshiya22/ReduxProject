import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col">
      <main className="flex-1 w-full px-4 md:px-10 lg:px-20 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;





// import React from "react";
// import { fetchUnsplashImages } from "./api/media";
// import { fetchPexelsVideos } from "./api/media";

// const App = () => {
//   return (
//     <div className="h-screen w-full bg-gray-950">
//       <button
//         className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
//         onClick={async () => {
//           const data = await fetchUnsplashImages("cat");
//           console.log(data.results);
//         }}
//       >
//         Get Photos
//       </button>

//       <button className="bg-purple-400 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded ml-4"
//         onClick={async () => {
//           const data = await fetchPexelsVideos("cat");
//           console.log(data.videos);
//         }}
//       >
//         Get Videos
//       </button>
//     </div>
//   );
// };

// export default App;
