import { TodoForm } from "./TodoForm";

export const TodoAddCard = ({
  open,
  handleClose,
  task,
  onNewTodo,
  mainTask,
}) => {
  const { id } = task;
  const onFormSubmit = ({ description, title, image, idTask }) => {
    const maxIndex = mainTask.reduce((max, tk) => Math.max(max, tk.index), -1);
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
