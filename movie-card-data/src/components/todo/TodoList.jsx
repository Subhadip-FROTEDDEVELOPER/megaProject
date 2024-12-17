import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { ImRadioUnchecked, ImRadioChecked } from "react-icons/im";

const TodoList = ({ data, handleDeleteTodo }) => {
  const [check, useCheck] = useState(true);
  const handleChecked = () => {
    useCheck(!check);
  };

  const checked = check ? (
    <ImRadioUnchecked className="size-4" />
  ) : (
    <ImRadioChecked className="size-4" />
  );

  return (
    <>
      <li
        className={`text-white flex-auto text-xl ${
          check ? "" : "line-through"
        }`}
      >
        {data}
      </li>
      <button
        className="p-1 text-white bg-orange-500 flex items-center justify-center"
        onClick={handleChecked}
      >
        {checked}
      </button>
      <button className="p-1 text-white bg-green-700 flex items-center justify-center">
        <FaRegEdit className="size-5" />
      </button>
      <button
        className="flex items-center justify-center p-1 text-white bg-red-600"
        onClick={() => handleDeleteTodo(data)}
      >
        <MdOutlineDelete className="size-5" />
      </button>
    </>
  );
};

export default TodoList;
