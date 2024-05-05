import ReactDOM from "react-dom/client";
import "./index.css";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
// import { HooksApp } from "./HooksApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //   // <React.StrictMode>
  <TodoApp />
  //   // </React.StrictMode>
);
