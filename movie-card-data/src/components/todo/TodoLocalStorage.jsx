const todoStorage = "storage";

export const getLocalStorageTodoData = () => {
  const getTodoStorage = localStorage.getItem(todoStorage);
  if (!getTodoStorage) return [];
  return JSON.parse(getTodoStorage);
};

export const setLocalStorageTodoData = (addTodo) => {
  return localStorage.setItem(todoStorage, JSON.stringify(addTodo));
};
