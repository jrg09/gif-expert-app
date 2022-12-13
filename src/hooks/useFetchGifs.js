import { useEffect, useState } from "react";
import { getGIFs } from "../api/giphyAPI";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifsFromAPI = async () => {
    const gifs = await getGIFs(category);
    setGifs(gifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifsFromAPI();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
