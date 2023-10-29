import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "First title",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  removeTodo: (id) => {},
  toggleComplete: (id) => {},
});

export function useTodo() {
    return useContext(TodoContext);
  }

export const TodoContextProvider = TodoContext.Provider;

