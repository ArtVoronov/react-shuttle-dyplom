import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, TextField } from "@material-ui/core";
import styles from "./index.module.css";
import { useState } from "react";
import { selectTodos } from "../../redux/selectors";

const TodosList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const date = new Date().toISOString();
    const todoItem = {
      id: date,
      date,
      title,
    };
    dispatch({
      type: "TODO_ADD",
      payload: {
        todoItem,
      },
    });
    console.log(todos);
    setTitle("");
    //snackbar add
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <TextField
          label="123123"
          onChange={handleChange}
          value={title}
          fullWidth
          inputProps={{ min: 0, style: { textAlign: "center" } }}
        />
      </form>
      <List className={styles.list}>
        {todos.map(({ id, title, date }) => (
          <ListItem
            alignItems="center"
            key={id}
            className={styles.listItem}
            contained
          >
            <h5>{title}</h5>
            <p>{date.toString()}</p>
          </ListItem>
        ))}
        <ListItem>smth</ListItem>
      </List>
    </>
  );
};

export default TodosList;
