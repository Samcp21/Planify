export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] Index Todo":
      const { id, index } = action.payload;
      // Encuentra la tarea que se está moviendo
      console.log("initialState", initialState);
      console.log("id", id);
      const movingTask = initialState.find((todo) => todo.id === id);
      console.log("movingTask", movingTask);

      // Si no se encontró la tarea, no hacer nada
      if (!movingTask) return initialState;
      console.log("initialState", initialState);
      // Encuentra todas las tareas que necesitan ser ajustadas
      const tasksToAdjust = initialState.filter((todo) => todo.id !== id);

      // Inserta la tarea movida en su nueva posición
      tasksToAdjust.splice(index, 0, { ...movingTask, index });

      // Actualiza los índices de las tareas restantes
      console.log("tasksToAdjust", tasksToAdjust);
      const newState = tasksToAdjust.map((todo, idx) => ({
        ...todo,
        index: idx,
      }));

      return newState;
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
