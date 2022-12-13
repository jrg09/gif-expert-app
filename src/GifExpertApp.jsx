import { useRef, useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);

  const onNewCategory = (event) => {
    categories.filter((category) => category == event).length == 0 &&
      setCategories([event, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategory={(event) => onNewCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
