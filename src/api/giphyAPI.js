const api_key = "xGUpGbXNMddiNpVOXHAjumzSwQ3i6M1O";
const apiEndpointURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=25&offset=0&rating=g&lang=en&limit=10`;

export const getGIFs = async (category) => {
  const url = `${apiEndpointURL}&q=${category}`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const minGifs = [];

  data.forEach((gif) => {
    let size = 99999999;
    let keySelected;
    for (const key in gif.images) {
      if (gif.images[key].size && Number(gif.images[key].size) < size) {
        keySelected = key;
        size = Number(gif.images[key].size);
      }
    }

    minGifs.push({
      id: gif.id,
      title: gif.title,
      image: gif.images[keySelected].url,
    });
  });

  return minGifs;
};
