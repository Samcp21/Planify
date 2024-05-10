import { ImCross } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";

export const TodoOptionCard = ({ onDeleteTodo, card }) => {
  const deleteToDo = () => {
    console.log("delete todo", card);
    onDeleteTodo(card.id);
  };
  const handleEdit = () => {
    console.log("handleEdit");
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
    </div>
  );
};
