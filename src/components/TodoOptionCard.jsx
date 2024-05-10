import { ImCross } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { useTodo } from "../hooks/useTodo";

export const TodoOptionCard = ({ onDeleteTodo,onEditTodo, card, listTasks }) => {
  const [open, setOpen] = useState(false);

  const deleteToDo = () => {
    console.log("delete todo", card);
    onDeleteTodo(card.id);
  };
  const handleEdit = () => {
    console.log("handleEdit", card);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const onFormEdit = ({ description, title, image }) => {
    onEditTodo({ ...card, description, title, image });
    handleClose();
  };
  return (
    <div className="d-flex gap-3">
      <MdModeEdit
        onClick={handleEdit}
        style={{ color: "green", cursor: "pointer" }}
      />
      <ImCross
        onClick={deleteToDo}
        style={{ color: "red", cursor: "pointer" }}
      />
      {open && (
        <TodoForm
          open={open}
          handleClose={handleClose}
          card={card}
          onFormSubmit={onFormEdit}
          idTask={card.idTask}
        />
      )}
    </div>
  );
};
