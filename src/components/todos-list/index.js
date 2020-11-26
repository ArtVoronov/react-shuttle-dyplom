import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, TextField } from "@material-ui/core";
import styles from "./index.module.css";
import { useState } from "react";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);
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
    setTitle("");
  };

  return (
    <List className={styles.list}>
      <form onSubmit={addTodo}>
        <TextField
          label="123123"
          onChange={handleChange}
          value={title}
          fullWidth
          inputProps={{ min: 0, style: { textAlign: "center" } }}
        />
      </form>
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
    </List>
  );
};

// const mapStateToProps = (state) => ({ todos: state });

// export default connect(mapStateToProps)(TodosList);
export default TodosList;
