import { TodoCard } from "./TodoCard";
import { useState } from "react";
import { Button } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TodoAddCard } from "./TodoAddCard";

export const TodoTask = ({
  todo,
  onNewTodo,
  task,
  onDeleteTodo,
  handleOrderTodo,
}) => {
  const { column } = task;
  const mainTask = todo.filter((x) => x.idTask == task.id);
  mainTask.sort((a, b) => a.index - b.index);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const cardDrag = ({ source, destination }) => {
    const mainCard = {
      ...mainTask.find((x) => x.index == source.index),
      index: destination.index,
    };
    return {
      mainCard,
    };
  };
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { mainCard } = cardDrag(result);
    handleOrderTodo(mainCard);
  };
  return (
    <div
      className="card rounded col "
      style={{ backgroundColor: "#F1F2F4", height: "100%" }}
    >
      <div className="card-body d-flex  flex-column ">
        <h5 className="card-title text-start">{column}</h5>
        <div className="overflow-auto" style={{ maxHeight: "90vh" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
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
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>
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
  );
};
