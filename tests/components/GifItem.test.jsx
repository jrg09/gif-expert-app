import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const title = "Goku";
  const image = "https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/100w_s.gif";

  test("01 pruebas de PropTypes obligatorios y hacer match con snapshot doce", () => {
    const { container } = render(<GifItem title={title} image={image} />);
    //screen.debug();

    expect(container).toMatchSnapshot();
  });

  test("02 should mostrar imagen con imagen y alt enviados", () => {
    render(<GifItem title={title} image={image} />);
    //screen.debug();
    //console.log('    screen.getByRole("img").src', screen.getByRole("img").src);

    //expect(screen.getByRole("img").src).toBe(image);
    //expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect({ src, alt }).toStrictEqual({ src: image, alt: title });
  });

  test("03 should mostrar titulo en el componente", () => {
    render(<GifItem title={title} image={image} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
