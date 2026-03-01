import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white flex flex-col gap-4 items-center justify-center">
      <SearchBar />
      <Tabs />
      <ResultGrid />
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
