import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from "@material-ui/core";
import { forwardRef, useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdd } from "../../../redux/todos";

const AddToDoDialog = ({ open, onClose, title, text }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
      title: value,
      date: new Date().toJSON(),
    };
    dispatch(todoAdd({ todoItem }));
    setValue("");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      container={document.body}
      maxWidth="lg"
      onSubmit={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            type="text"
            variant="outlined"
            label="Type new todos name."
            value={value}
            onChange={handleChange}
            fullWidth
          />
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button disabled={value === ""} type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddToDoDialog;
