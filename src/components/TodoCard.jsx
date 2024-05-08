import { TodoSubCard } from "./TodoSubCard";
import { AddCard } from "./AddCard";
import { useState } from "react";
import { Button } from "@mui/material";

export const TodoCard = ({ todo, onNewTodo, task, onDeleteTodo }) => {
  const { column } = task;
  const mainTask = todo.filter((x) => x.idTask == task.id);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className="card rounded col m-4"
      style={{ backgroundColor: "#F1F2F4" }}
    >
      <div className="card-body">
        <h5 className="card-title text-start ">{column}</h5>

        {mainTask.map((card) => {
          return (
            <TodoSubCard
              key={card.id}
              card={card}
              onDeleteTodo={onDeleteTodo}
            />
          );
        })}

        <Button className="m-2 text-start" onClick={handleOpen}>
          + Add a card
        </Button>
        {open && (
          <AddCard
            open={open}
            task={task}
            handleClose={handleClose}
            onNewTodo={onNewTodo}
          />
        )}
      </div>
    </div>
  );
};
