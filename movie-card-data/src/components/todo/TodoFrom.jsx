import React, { useState } from "react";

const TodoFrom = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});
  const handleInputValueChange = (value) => {
    setInputValue({ id: value, content: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "" });
  };
  return (
    <section className="flex justify-center mt-8">
      <form
        className="border-2 p-2 h-24 w-96 flex items-center justify-center gap-x-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="enter name"
          className="border-2 px-2 py-1 focus:outline-none text-xl tracking-wider"
          value={inputValue.content}
          onChange={(event) => handleInputValueChange(event.target.value)}
        />
        <button
          type="submit"
          className="border-2 py-1 px-6 bg-blue-500 text-white text-xl"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default TodoFrom;
