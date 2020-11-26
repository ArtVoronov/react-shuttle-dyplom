import { connect } from "react-redux";
import { List, ListItem } from "@material-ui/core";
import styles from "./index.module.css";

const TodosList = ({ todos }) => (
  <List className={styles.list}>
    {todos.map(({ id, title, date }) => (
      <ListItem
        button
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

const mapStateToProps = (state) => ({ todos: state });

export default connect(mapStateToProps)(TodosList);
