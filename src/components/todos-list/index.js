import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { memo, useEffect, useState } from "react";
import { selectTodos, todoFetch } from "../../redux/todos";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import DeleteTodoModal from "./delete-todo-modal";

const TodosList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { todos, loading } = useSelector(selectTodos);

  useEffect(() => {
    dispatch(todoFetch());
  }, [dispatch]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Grid container spacing={3}>
      {todos.map(({ id, title, date }) => (
        <Grid item key={id} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea
              component={Link}
              to={{
                pathname: `/todos/${id}`,
                state: { background: location, id: id },
              }}
            >
              <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="caption">
                  {moment(date).format("DD MMMM YYYY, HH:mm:ss")}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TodosList;
