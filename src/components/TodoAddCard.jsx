import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "../hooks/useForm";
// import { useFetchGifs } from "../hooks/useFetchGifs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const TodoAddCard = ({
  open,
  handleClose,
  task,
  onNewTodo,
  mainTask,
}) => {
  const { id, column } = task;
  const {
    description,
    title,
    image,
    idTask,
    index,
    onFormReset,
    onInputChange,
  } = useForm({
    description: "",
    title: "",
    image: "",
    idTask: id,
    index: 0,
  });
  const onFormSubmit = (event) => {
    event.preventDefault();
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
      onFormReset();
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" id="modal-title">
            Add To Do
          </Typography>
          <cite>{column}</cite>

          <hr />
          <form onSubmit={onFormSubmit}>
            <Typography variant="h6">Title</Typography>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
              fullWidth
            />
            <Typography variant="h6">Description</Typography>
            <TextField
              id="description"
              label="Description"
              value={description}
              name="description"
              placeholder="Description"
              onChange={(e) => onInputChange(e)}
              multiline
              rows={4}
              fullWidth
            />
            <Typography variant="h6">Image</Typography>
            <TextField
              id="image-url"
              label="URL de la imagen"
              type="url"
              name="image"
              value={image}
              onChange={(e) => onInputChange(e)}
              variant="outlined"
              fullWidth
            />

            <Button
              className="mt-4"
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Add To Do
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
