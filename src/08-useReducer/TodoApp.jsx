import { useTodo } from "../hooks/useTodo";
import { TodoCard } from "../components/TodoCard";
import { useState } from "react";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
  } = useTodo();
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarea 1", column: "To Do" },
    { id: 2, title: "Tarea 2", column: "In Progress" },
    { id: 3, title: "Tarea 3", column: "Done" },
  ]);
  return (
    <>
      <h1>
        TodoApp:{todosCount} | Pendientes:
        {pendingTodosCount}
      </h1>
      <hr />
      <div style={{ backgroundColor: "#00AECC" }}>
        <div className="container ">
          <div className="row">
            {tasks.map((x) => {
              return (
                <TodoCard
                  key={x.id}
                  task={x}
                  todo={todos}
                  onDeleteTodo={handleDeleteTodo}
                  onNewTodo={handleNewTodo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
