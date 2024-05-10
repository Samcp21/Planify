import { TodoCard } from "./TodoCard";
import { useState } from "react";
import { Button } from "@mui/material";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { TodoAddCard } from "./TodoAddCard";

export const TodoTask = ({
  todo,
  onNewTodo,
  task,
  onDeleteTodo,
  onEditTodo,
}) => {
  const { column } = task;
  const mainTask = todo.filter((x) => x.idTask == task.id);
  mainTask.sort((a, b) => a.index - b.index);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="col-4 ">
      <Droppable droppableId={task.id.toString()}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div
              className="card rounded col shadow-lg p-3 mb-5 rounded "
              style={{ backgroundColor: "#F1F2F4", height: "100%" }}
            >
              <div className="card-body d-flex  flex-column ">
                <h5 className="card-title text-start">{column}</h5>
                {/* <div class="overflow-x-scroll">Hello world</div> */}
                <div className="overflow-auto" style={{ maxHeight: "80vh" }}>
                  {/* {provided.placeholder} */}
                  {mainTask.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <TodoCard
                            key={task.id}
                            card={task}
                            onDeleteTodo={onDeleteTodo}
                            onEditTodo={onEditTodo}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                <Button className="text-start" onClick={handleOpen}>
                  + Add a card
                </Button>
                {open && (
                  <TodoAddCard
                    open={open}
                    task={task}
                    handleClose={handleClose}
                    onNewTodo={onNewTodo}
                    mainTask={mainTask}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};
