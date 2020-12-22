import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { selectTodos, todoFetch } from "../../redux/todos";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";

const TodosList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { todos, loading } = useSelector(selectTodos);

  useEffect(() => {
    dispatch(todoFetch());
  }, [dispatch]);

  const skeletons = [...Array(6).keys()];

  if (loading)
    return (
      <Grid container spacing={3}>
        {skeletons.map((_, id) => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Grid>
        ))}
      </Grid>
    );

  return (
    <Grid container spacing={3}>
      {todos.map(({ id, title, date }) => (
        <Grid item key={id} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea
              component={Link}
              to={{
                pathname: `/todos/${id}`,
                state: { background: location, id: id, title: title },
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
