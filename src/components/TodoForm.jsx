import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "../hooks/useForm";

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
export const TodoForm = ({ open, handleClose, card, onFormSubmit, idTask }) => {
  const { description, title, image, onInputChange } = useForm({
    description: card?.description || "",
    title: card?.title || "",
    image: card?.image || "",
    idTask: card?.idTask || idTask,
    index: card?.index || 0,
  });
  const onFormEvent = (event) => {
    event.preventDefault();
    onFormSubmit({
      description,
      title,
      image,
      idTask,
      id: card?.id,
    });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h4" id="modal-title">
          {card ? "Edit To Do" : "Add To Do"}
        </Typography>
        {/* <cite>
          {listTasks.find((x) => x.id == card.idTask).title || task?.column}
          title
        </cite> */}

        <hr />
        <form onSubmit={onFormEvent}>
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
            {card ? "Edit To Do" : "Add To Do"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
