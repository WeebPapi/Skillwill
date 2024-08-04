const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case "TOGGLE_COMPLETE":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };
    default:
      return state;
  }
};
