import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
// import { MainApp } from "./09-useContext/MainApp";
// import { getRoutes } from "./Routes/Routes";
// import { MainApp } from "./09-useContext/MainApp";
// import { HooksApp } from "./HooksApp.jsx";

// const router = getRoutes;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* // <React.StrictMode> */}
    <TodoApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
