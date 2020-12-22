import { Dialog, DialogContent } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import Notes from "../../components/notes";

const TodosDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const title = location.state.title;
  const handleClose = () => {
    history.goBack();
  };

  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogContent>
        <Notes title={title} />
      </DialogContent>
    </Dialog>
  );
};

export default TodosDetailsPage;
