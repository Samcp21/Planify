import { useTodo } from "../hooks/useTodo";
import { TodoTask } from "../components/TodoTask";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleOrderTodo,
    handleEditTodo,
  } = useTodo();
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarea 1", column: "To Do" },
    { id: 2, title: "Tarea 2", column: "In Progress" },
    { id: 3, title: "Tarea 3", column: "Done" },
  ]);
  const onDragEnd = (result) => {
    console.log("onDragEnd", result);
    const { destination, draggableId, source } = result;
    if (!destination) {
      return;
    } else if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }
    const mainCard = {
      ...todos.find((x) => x.id == draggableId),
      index: destination.index,
      idTask: Number(destination.droppableId),
      beforeIdTask: Number(source.droppableId),
    };
    console.log("mainCard", mainCard);
    handleOrderTodo(mainCard);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          style={{
            backgroundColor: "#73b9c6",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23222123' fill-opacity='0.46' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
            height: "100vh",
            width: "100vw",
          }}
          className="d-flex align-items-center "
        >
          <div
            className="container"
            style={{
              whiteSpace: "nowrap",
              overflowX: "auto",
            }}
          >
            <div className="d-flex justify-content-between">
              {tasks.map((x) => {
                return (
                  <TodoTask
                    key={x.id}
                    listTasks={tasks}
                    task={x}
                    todo={todos}
                    onDeleteTodo={handleDeleteTodo}
                    onNewTodo={handleNewTodo}
                    onEditTodo={handleEditTodo}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </DragDropContext>
    </>
  );
};
