import { useDispatch, useSelector } from "react-redux";
import { Button, Card, List, ListItem } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { notesFetch, selectNotes } from "../../redux/notes";
import DeleteTodoModal from "../todos-list/delete-todo-modal";

const Notes = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector(selectNotes);
  const { id } = useParams();

  useEffect(() => {
    dispatch(notesFetch({ id }));
  }, [dispatch, id]);

  const [deleteModalOpen, setOpen] = useState(false);

  const handleDeleteModalOpen = () => {
    setOpen(!deleteModalOpen);
  };

  return (
    <Card>
      <Button onClick={handleDeleteModalOpen}>Delete</Button>
      <DeleteTodoModal
        id={id}
        open={deleteModalOpen}
        onClose={handleDeleteModalOpen}
      />
      <List subheader="Note">
        {notes.map((note) => (
          <ListItem key={note.id}>{note.title}</ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Notes;
