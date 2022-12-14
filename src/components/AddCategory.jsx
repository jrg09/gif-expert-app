import { useRef, useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newValue = inputValue.trim();

    if (newValue.length <= 1) {
      return;
    }

    onNewCategory(newValue);

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="formulario">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Buscar GIFs"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
