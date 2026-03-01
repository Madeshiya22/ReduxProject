import React, { useEffect } from "react";
import { fetchPexelsVideos, fetchUnsplashImages } from "../api/media";
import {
  setLoading,
  searchResults,
  searchError,
} from "../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, loading, error, results } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    const getData = async () => {
      if (!query) return;

      dispatch(setLoading(true));

      try {
        let data = [];

        if (activeTab === "photos") {
          const response = await fetchUnsplashImages(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.thumb,
            src: item.urls.full,
            url: item.links.html,
          }));
        }

        if (activeTab === "videos") {
          const response = await fetchPexelsVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user?.name || "video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url,
          }));
        }


        console.log("Fetched data:", data);
        dispatch(searchResults(data));
      } catch (err) {
        dispatch(searchError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  if (error) {
    return <div className="text-red-500 text-lg">{error}</div>;
  }
  if (loading) {
    return <div className="text-blue-500 text-lg">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1  px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.map((item, index) => {
        return <div key={index}>
              <ResultCard item={item} />
        </div>;
      })}
    </div>
  );
};

export default ResultGrid;
