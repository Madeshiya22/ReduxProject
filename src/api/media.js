import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function fetchUnsplashImages(query) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page: 1, per_page: 20 },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res.data;
}

export async function fetchPexelsVideos(query) {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page: 20 },
    headers: { Authorization: PEXELS_KEY },
  });
  return res.data;
}
