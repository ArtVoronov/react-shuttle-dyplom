import axios from "axios";
const url = process.env.REACT_APP_API_URL;

export const getTodos = async () => {
  const response = await axios.get(`${url}/todos.json`);
  const todos = Object.keys(response.data).map((key) => ({
    ...response.data[key],
    id: key,
  }));

  return todos;
};

export const createTodo = async (todoItem) => {
  const newTodoItem = {
    ...todoItem,
    date: todoItem.date ? todoItem.date : new Date().toJSON(),
  };
  const response = await axios.post(`${url}/todos.json`, newTodoItem);
  return response.data.name;
};

export const getNotes = async (id) => {
  const response = await axios.get(`${url}/notes.json`);
  // let itemNotes = [];
  // if (response.data) {
  //   itemNotes = Object.keys(response.data).map((key) => ({
  //     ...response.data[key],
  //     id: key,
  //   }));
  // }
  const itemNotes = response.data
    ? Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }))
    : [];
  const itemFiltered = itemNotes.filter((item) => item.todoItemId === id);
  return itemFiltered;
};

export const deleteTodo = async (id) => {
  console.log(`deleteTodo`);
  console.log(id);
  await axios.delete(`${url}/todos/${id}.json`);
};
