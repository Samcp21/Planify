import { useTodo } from "../hooks/useTodo";
import { TodoTask } from "../components/TodoTask";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleOrderTodo,
  } = useTodo();
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarea 1", column: "To Do" },
    { id: 2, title: "Tarea 2", column: "In Progress" },
    { id: 3, title: "Tarea 3", column: "Done" },
  ]);
  return (
    <>
      {/* <h1>
        TodoApp:{todosCount} | Pendientes:
        {pendingTodosCount}
      </h1> */}
      {/* <hr /> */}
      <div
        style={{ backgroundColor: "#00AECC", height: "100vh", width: "100vw" }}
        className="d-flex align-items-center"
      >
        <div className="container ">
          <div className="row gap-3">
            {tasks.map((x) => {
              return (
                <TodoTask
                  key={x.id}
                  task={x}
                  todo={todos}
                  onDeleteTodo={handleDeleteTodo}
                  onNewTodo={handleNewTodo}
                  handleOrderTodo={handleOrderTodo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
