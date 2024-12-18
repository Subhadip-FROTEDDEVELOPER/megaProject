import React, { useState } from "react";
import TodoDate from "./TodoDate";
import TodoList from "./TodoList";
import TodoFrom from "./TodoFrom";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

const Todo = () => {
  const [addTodo, setAddTodo] = useState(() => getLocalStorageTodoData());
  const [isSectionVisible, setIsSectionVisible] = useState(getLocalStorageTodoData().length > 0);

  const handleSubmit = (inputValue) => {
    const { id, content } = inputValue;
    if (!content) return;
    const ifTodoContentMatched = addTodo.find((curTodo) => {
      curTodo.content === content;
    });
    if (ifTodoContentMatched) return;
    setAddTodo((prev) => [...prev, { id, content }]);
    setIsSectionVisible(true);
  };

  setLocalStorageTodoData(addTodo);

  const handleDeleteTodo = (todos) => {
    const deleteTodo = addTodo.filter((todo) => {
      return todo.content !== todos;
    });
    setAddTodo(deleteTodo);
    if (deleteTodo.length === 0) {
      setIsSectionVisible(false);
    }
  };

  const handleClearAll = () => {
    setAddTodo([]);
    setIsSectionVisible(false);
  };

  return (
    <>
      <TodoDate />
      <TodoFrom onAddTodo={handleSubmit} />

      {isSectionVisible && (
        <section className="flex justify-center mt-8">
          <ul className="border-2 h-full w-96 p-2">
            {addTodo.map((todo) => {
              return (
                <div
                  className="flex items-center gap-x-3 mt-2 border-2 py-1 px-3 bg-blue-500"
                  key={todo.id}
                >
                  <TodoList
                    data={todo.content}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                </div>
              );
            })}
          </ul>
        </section>
      )}

      <section className="flex justify-center mt-8">
        <button className="border-2 px-4 py-1 text-xl" onClick={handleClearAll}>
          Clear All
        </button>
      </section>
    </>
  );
};

export default Todo;
