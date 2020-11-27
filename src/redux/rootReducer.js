import { handleActions } from "redux-actions";
import { todoAdd, todoRemove } from "./actions";

const date = new Date().toISOString();

const initialState = {
  todos: [
    {
      id: "aldksj123",
      date: date,
      title: "Initial todo item",
    },
  ],
};

const rootReducer = handleActions(
  {
    [todoAdd]: (state, { payload: { todoItem } }) => ({
      ...state,
      todos: [...state.todos, todoItem],
    }),
    [todoRemove]: (state, { payload: { id } }) =>
      state.todos.filter((item) => item.id !== id),
  },
  initialState
);

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "TODO_ADD":
//       const todoItem = action.payload.todoItem;
//       return [...state, todoItem];
//     case "TODO_REMOVE":
//       const id = action.payload.id;
//       return state.filter((item) => item.id !== id);
//     default:
//       return state;
//   }
// };

export default rootReducer;
