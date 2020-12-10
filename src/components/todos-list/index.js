import { useSelector, useDispatch } from "react-redux";
import { Button, List, ListItem } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./index.module.css";
import { useEffect } from "react";
import { selectTodos, todoFetch } from "../../redux/todos";
import { CheckBox } from "@material-ui/icons";

const TodosList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(selectTodos);

  useEffect(() => {
    dispatch(todoFetch());
  }, [dispatch]);

  return (
    <List className={styles.list}>
      {todos.map(({ id }) => (
        <ListItem alignItems="center" key={id} className={styles.listItem}>
          <h5>id</h5>
          <Button>
            <DeleteIcon />
          </Button>
          <Button>
            <CheckBox />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TodosList;
