import { Button } from "@material-ui/core";
import { useState } from "react";
import TodosList from "../../components/todos-list";
import AddToDoDialog from "../../components/todos-list/add-todo-modal";

const TodosPage = () => {
  const [open, setOpen] = useState(false);

  const handleToggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleToggleModal}>add new todo</Button>
      <AddToDoDialog
        open={open}
        onClose={handleToggleModal}
        title="Create new todo"
      />
      <TodosList />
    </>
  );
};

export default TodosPage;
