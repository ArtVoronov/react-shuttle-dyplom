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
    "&$complited": {
      backgroundColor: "#FF6347",
    },
    "&$uncomplited": {
      backgroundColor: "#649568",
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
  const handleComplite = (event) => {
    console.log(event);
  };

  const styles = useStyles();
  return (
    <ListItem>
      <Card
        className={isCompleted ? styles.complited : styles.uncomplited}
        classes={{ root: styles.card }}
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
