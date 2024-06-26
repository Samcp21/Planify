import { useFetchGifs } from "../hooks/useFetchGifs";
import { TodoOptionCard } from "./TodoOptionCard";

export const TodoCard = ({ card, onDeleteTodo, onEditTodo, listTasks }) => {
  const { description, title, image } = card;

  const { images } = useFetchGifs(title);

  return (
    <div key={card.id} className="card m-3 ">
      <img
        src={image ? image : images?.url}
        className="card-img-top object-fit-cover w-100 "
        alt="Image ToDo"
        style={{ height: "200px" }}
      />
      <div className="card-body text-wrap">
        <h5 className="card-title">{title}</h5>
        <p className="card-text ">{description}</p>
        <TodoOptionCard
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
          card={card}
          listTasks={listTasks}
        />
      </div>
    </div>
  );
};
