import {
  Card,
  CardContent,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { uncompliteNote } from "../../api";
import { notesComplite, notesUncomplite } from "../../redux/notes";

const useStyles = makeStyles({
  card: {
    "&$complited": {
      backgroundColor: "#649568",
    },
    "&$uncomplited": {
      backgroundColor: "#FF6347",
    },
    maxWidth: "100%",
    minWidth: "100%",
    width: "100%",
  },
  cardItem: {
    width: "100%",
  },
  uncomplited: {},
  complited: {},
});

const NoteItem = ({ id, title, date, isCompleted }) => {
  const [complited, setCompleted] = useState(isCompleted);
  const dispatch = useDispatch();
  const styles = useStyles();

  // useEffect(() => {
  //   isCompleted ? dispatch(notesComplite(id)) : dispatch(notesUncomplite(id));
  // }, [dispatch, isCompleted, id]);

  const handleComplite = (id, isComplited) => {
    isComplited
      ? dispatch(notesComplite({ id }))
      : dispatch(uncompliteNote({ id }));

    setCompleted(!isComplited);
  };

  return (
    <ListItem>
      <Card
        className={complited ? styles.complited : styles.uncomplited}
        classes={{ root: styles.card }}
        onClick={() => handleComplite(id, complited)}
      >
        <CardContent className={styles.cardItem}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2">
            {moment(date).format("DD MMMM YYYY, HH:mm:ss")}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default NoteItem;
