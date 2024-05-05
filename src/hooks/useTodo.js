import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: "Recolectar la piedra del alma",
    //   done: false,
    // }
  ];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    console.log("id", id);
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    console.log("id", id);
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  const todosCount = todos.length;

  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
