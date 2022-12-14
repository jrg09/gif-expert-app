import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("01 debe hacer match con el snapshot", () => {
    const { container } = render(<GifExpertApp />);
    //screen.debug();
    expect(container).toMatchSnapshot();
  });

  test("02 debe esperar y mostrar el titulo de Goku y las imagenes resultado", async () => {
    const { container } = render(<GifExpertApp />);
    await waitFor(() => {
      expect(container.getElementsByClassName("card").length).toBeGreaterThan(
        3
      );
    });

    //screen.debug();
    expect(screen.getByText("Goku")).toBeTruthy();
    expect(container.getElementsByClassName("card").length).toBeGreaterThan(3);
  });

  test("03 debe escribir algo en input y hacer submit al formulario", () => {
    render(<GifExpertApp />);

    screen.debug();

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    const category = "stonks";
    fireEvent.input(input, { target: { value: category } });

    fireEvent.submit(form);
    screen.debug();

    expect(input.value).toBe("");

    // expect(onNewCategory).toHaveBeenCalled();
    // expect(onNewCategory).toHaveBeenCalledTimes(1);
    // expect(onNewCategory).toHaveBeenCalledWith(category);
  });
});
