import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { notesFetch, selectNotes } from "../../redux/notes";
import DeleteTodoModal from "../todos-list/delete-todo-modal";
import NoteItem from "./note-item";
import EditTodoModal from "../todos-list/edit-todo-modal";
import { Skeleton } from "@material-ui/lab";

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

const Notes = ({ title }) => {
  const dispatch = useDispatch();
  const { notes, loading } = useSelector(selectNotes);
  const { id } = useParams();
  const styles = useStyles();

  useEffect(() => {
    dispatch(notesFetch({ id }));
  }, [dispatch, id]);

  const [deleteModalOpen, setDeleteOpen] = useState(false);
  const [editModalOpen, setEditOpen] = useState(false);

  const handleDeleteModalOpen = () => {
    setDeleteOpen(!deleteModalOpen);
  };

  const handleEditModalOpen = () => {
    setEditOpen(!editModalOpen);
  };

  const skeletons = [...Array(4).keys()];

  if (loading) {
    return (
      <Card variant="outlined">
        <CardHeader
          title={<Skeleton variant="text" />}
          action={
            <>
              <Button onClick={handleDeleteModalOpen}>Delete</Button>
              <Button onClick={handleEditModalOpen}>Edit</Button>
            </>
          }
        />
        <List>
          {skeletons.map((note) => (
            <ListItem>
              <Card classes={{ root: styles.card }}>
                <CardContent className={styles.cardItem}>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </Card>
    );
  }

  return (
    <Card variant="outlined">
      <CardHeader
        title={title}
        action={
          <>
            <Button onClick={handleDeleteModalOpen}>Delete</Button>
            <Button onClick={handleEditModalOpen}>Edit</Button>
          </>
        }
      />

      <DeleteTodoModal
        id={id}
        open={deleteModalOpen}
        onClose={handleDeleteModalOpen}
      />
      <EditTodoModal
        open={editModalOpen}
        onClose={handleEditModalOpen}
        title={title}
      />
      <List>
        {notes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </List>
    </Card>
  );
};

export default Notes;
