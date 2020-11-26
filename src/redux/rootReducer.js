const initialState = [
  {
    id: "aldksj123",
    date: new Date(),
    title: "Initial todo item",
  },
  {
    id: "aldksj123",
    date: new Date(),
    title: "Initial todo item1",
  },
  {
    id: "aldksj123",
    date: new Date(),
    title: "Initial todo item2",
  },
];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_ADD":
      const todoItem = action.payload.todoItem;
      return [...state, todoItem];
    case "TODO_REMOVE":
      const id = action.payload.id;
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
};

export default rootReducer;
