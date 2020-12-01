import { useSelector, useDispatch } from "react-redux";
import { Button, List, ListItem, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./index.module.css";
import { useState } from "react";
import { selectTodos } from "../../redux/todos/selectors";
import { CheckBox } from "@material-ui/icons";

const TextAreaProps = { min: 0, style: { textAlign: "center" } };

const TodosList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  console.log(todos);

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
    //snackbar add
  };

  const addTodoDone = (event) => {
    event.preventDefault();
  };

  const removeTodo = () => {};

  return (
    <>
      <form onSubmit={addTodo} className={styles.inputForm}>
        <TextField
          label="Type title, please"
          onChange={handleChange}
          value={title}
          fullWidth
          inputProps={TextAreaProps}
          variant="outlined"
          className={styles.textField}
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
            <Button onClick={removeTodo}>
              <DeleteIcon />
            </Button>
            <CheckBox onChange={addTodoDone} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TodosList;
