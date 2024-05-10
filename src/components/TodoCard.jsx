import { useEffect, useMemo, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { TodoOptionCard } from "./TodoOptionCard";

export const TodoCard = ({ card, onDeleteTodo }) => {
  console.log("card", card);
  const { description, title, image } = card;

  const [hovered, setHovered] = useState(false);
  const { images } = useFetchGifs(title);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      key={card.id}
      className="card my-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image ? image : images.url}
        className="card-img-top object-fit-cover w-100 "
        alt="Image ToDo"
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <TodoOptionCard
          onDeleteTodo={onDeleteTodo}
          hovered={hovered}
          card={card}
        />
      </div>
    </div>
  );
};
