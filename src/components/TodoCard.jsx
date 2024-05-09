import { ImCross } from "react-icons/im";
import { useState } from "react";

export const TodoCard = ({ card, onDeleteTodo }) => {
  const { description, image, title } = card;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const deleteToDo = () => {
    console.log("delete todo", card);
    onDeleteTodo(card.id);
  };
  return (
    <div
      key={card.id}
      className="card my-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image}
        className="card-img-top object-fit-cover w-100 "
        alt="Image ToDo"
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {isHovered && (
          <ImCross
            onClick={deleteToDo}
            style={{
              position: "absolute",
              cursor: "pointer",
              top: "5px",
              right: "5px",
              zIndex: 1,
              color: "red",
            }}
          />
        )}
        <footer className="blockquote-footer">
          Hello world
          <cite title="Source Title">Source Title</cite>
        </footer>
      </div>
    </div>
  );
};
