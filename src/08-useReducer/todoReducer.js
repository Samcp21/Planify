export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] Index Todo":
      const { id, index, idTask, beforeIdTask } = action.payload;
      if (idTask == beforeIdTask) {
        const tasksToAdjust = initialState.filter(
          (todo) => todo.id !== id && todo.idTask == idTask
        );
        const defaultTasks = initialState.filter(
          (todo) => todo.idTask != idTask
        );
        tasksToAdjust.splice(index, 0, { ...action.payload, index });
        const newState = tasksToAdjust.map((todo, idx) => ({
          ...todo,
          index: idx,
        }));
        return [...newState, ...defaultTasks];
      } else {
        const originTasks = initialState.filter(
          (todo) => todo.id !== id && todo.idTask === beforeIdTask
        );
        const adjustedOriginTasks = originTasks.map((todo, idx) => ({
          ...todo,
          index: idx,
        }));
        console.log("adjustedOriginTasks", adjustedOriginTasks);
        const destinationTasks = initialState.filter(
          (todo) => todo.id !== id && todo.idTask === idTask
        );
        console.log("destinationTasks", destinationTasks);
        destinationTasks.splice(index, 0, { ...action.payload, index });
        const adjustedDestinationTasks = destinationTasks.map((todo, idx) => ({
          ...todo,
          index: idx,
        }));
        const defaultTasks = initialState.filter(
          (todo) =>
            todo.idTask !== idTask &&
            todo.idTask != beforeIdTask &&
            todo.id != id
        );
        console.log("defaultTasks", defaultTasks);
        return [
          ...adjustedOriginTasks,
          ...adjustedDestinationTasks,
          ...defaultTasks,
        ];
      }
    case "[TODO] Edit Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload,
          };
        }
        return todo;
      });
    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
