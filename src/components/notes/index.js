import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardHeader, List, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { notesFetch, selectLoadingNotes, selectNotes } from "../../redux/notes";
import DeleteTodoModal from "../todos-list/delete-todo-modal";
import NoteItem from "./note-item";
import EditTodoModal from "../todos-list/edit-todo-modal";

const Notes = ({ title }) => {
  const dispatch = useDispatch();
  const { notes } = useSelector(selectNotes);
  const { id } = useParams();

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
