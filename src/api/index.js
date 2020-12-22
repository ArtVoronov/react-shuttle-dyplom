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
  const itemNotes = response.data
    ? Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }))
    : [];
  const itemFiltered = itemNotes.filter((item) => item.todoItemId === id);
  return itemFiltered;
};

export const editTodo = async (todoItem) => {
  await axios.patch(`${url}/todos/${todoItem.id}.json`, { ...todoItem });
};

export const deleteTodo = async (id) => {
  await axios.delete(`${url}/todos/${id}.json`);
};

export const compliteNote = async (id) => {
  await axios.patch(`${url}/todos/${id}.json`, { isComplited: true });
};

export const uncompliteNote = async (id) => {
  await axios.patch(`${url}/todos/${id}.json`, { isComplited: false });
};
