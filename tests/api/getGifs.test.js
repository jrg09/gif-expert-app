import { getGIFs } from "../../src/api/giphyAPI";

describe("Pruebas sobre archivo getGifs.js", () => {
  const category = "Goku";

  test("01 debe retornar arreglo de gifs", async () => {
    const gifs = await getGIFs(category);

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      image: expect.any(String),
    });
  });
});
