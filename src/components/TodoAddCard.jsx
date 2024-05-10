import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "../hooks/useForm";
import { TodoForm } from "./TodoForm";
// import { useFetchGifs } from "../hooks/useFetchGifs";

export const TodoAddCard = ({
  open,
  handleClose,
  task,
  onNewTodo,
  mainTask,
}) => {
  const { id } = task;
  console.log("task", task);
  const onFormSubmit = ({ description, title, image, idTask }) => {
    console.log("onFormSubmit");
    console.log({ description, title, image, idTask });
    console.log("mainTask", mainTask);
    const maxIndex = mainTask.reduce((max, tk) => Math.max(max, tk.index), -1);
    console.log("maxIndex", maxIndex);
    // const { images, isLoading } = useFetchGifs(title);

    if (description.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        index: maxIndex + 1,
        idTask,
        done: false,
        description,
        title,
        image,
      };
      console.log("newTodo", newTodo);
      onNewTodo(newTodo);
      handleClose();
    }
  };
  return (
    <>
      <TodoForm
        open={open}
        handleClose={handleClose}
        onFormSubmit={onFormSubmit}
        idTask={id}
      />
    </>
  );
};
