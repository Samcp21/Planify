import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onFormReset, onInputChange } = useForm({
    description: "",
  });
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        done: false,
        description,
      };
      onNewTodo(newTodo);
      onFormReset();
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={(e) => onInputChange(e)}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
