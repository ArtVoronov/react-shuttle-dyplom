import {
  Card,
  CardContent,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    minWidth: 350,
  },
  cardItem: {
    minWidth: 350,
  },
  uncomplited: {
    backgroundColor: "#FF6347",
  },
  complited: {
    backgroundColor: "#649568",
  },
});

const NoteItem = ({ id, title, date, isCompleted }) => {
  const handleComplite = (event) => {
    console.log(event);
  };

  const styles = useStyles();
  return (
    <ListItem>
      <Card
        className={
          (styles.card, isCompleted ? styles.complited : styles.uncomplited)
        }
        onClick={handleComplite}
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
