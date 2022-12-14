import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/components";

describe("Pruebas sobre useFetchGifs hook", () => {
  //

  const category = "superman";

  test("01 debe regresar el estado inicial (imagenes vacio y isLoading true)", () => {
    const { result } = renderHook(() => useFetchGifs(category));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("02 debe regresar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs(category));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    //console.log({ gifs, isLoading });

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
