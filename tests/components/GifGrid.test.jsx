import { render, screen, queryHelpers } from "@testing-library/react";
import { GifGrid, useFetchGifs } from "../../src/components";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GridGif> component", () => {
  const category = "Spiderman";

  test("01 debe mostrar el loading", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByTestId("infinity-spin")).toBeTruthy();
  });

  test("02 debe mostrar items cuando se cargan las imagenes del useFetchGifs", () => {
    const gifs = [
      { id: "1212", image: "https://example.com", title: "superman" },
      { id: "1212a", image: "https://example.com", title: "goku" },
    ];

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });

    const { container } = render(<GifGrid category={category} />);

    //screen.debug();

    expect(container.getElementsByClassName("card").length).toBe(gifs.length);
  });
});
