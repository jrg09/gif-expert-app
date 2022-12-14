import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas sobre componente AddCategory", () => {
  const category = "Superman";

  test("01 debe mostrarse el valor en el input", () => {
    render(
      <AddCategory
        onNewCategory={(value) => {
          console.log;
        }}
      />
    );

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: category } });

    //screen.debug();

    expect(input.value).toBe(category);
  });

  test("02 debe llamarse a la funcion onNewCategory [llamada, solo 1 vez, con parametro enviado]", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });

    fireEvent.submit(form);
    //screen.debug();

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(category);
  });

  test("03 no debe mandar llamar la funcion si el valor enviado es vacío", async () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.submit(form);
    //screen.debug();

    expect(input.value).toBe("");

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
