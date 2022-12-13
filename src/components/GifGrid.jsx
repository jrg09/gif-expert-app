import { useFetchGifs, GifItem } from "./";
import { InfinitySpin } from "react-loader-spinner";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  console.log({ gifs, isLoading });

  return (
    <>
      <h4>{category}</h4>
      {isLoading ? (
        <div>
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        <>
          <h5>Total gifs: {gifs.length}</h5>
          <div className="card-grid">
            {gifs.map((gif) => (
              <GifItem key={gif.id} {...gif} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
