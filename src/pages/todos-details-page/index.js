import { Dialog, DialogContent } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Notes from "../../components/notes";

const TodosDetailsPage = () => {
  const history = useHistory();

  const handleClose = () => {
    history.goBack();
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogContent>
        <Notes />
      </DialogContent>
    </Dialog>
  );
};

export default TodosDetailsPage;
