export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] Index Todo":
      const { id, index } = action.payload;

      const movingTask = initialState.find((todo) => todo.id === id);

      if (!movingTask) return initialState;

      const tasksToAdjust = initialState.filter(
        (todo) => todo.id !== id && todo.idTask == movingTask.idTask
      );
      const defaultTasks = initialState.filter(
        (todo) => todo.idTask != movingTask.idTask
      );
      
      tasksToAdjust.splice(index, 0, { ...movingTask, index });

      const newState = tasksToAdjust.map((todo, idx) => ({
        ...todo,
        index: idx,
      }));
      newState.push(...defaultTasks);
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
