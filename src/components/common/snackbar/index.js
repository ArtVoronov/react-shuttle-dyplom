import { useState } from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const SnackbarCustom = ({ message, severity }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  if (message && openSnackbar === false) {
    setOpenSnackbar(true);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpenSnackbar(false);
  };

  return (
    <Snackbar open={openSnackbar} onClose={handleClose} autoHideDuration={6000}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarCustom;

SnackbarCustom.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(["warning", "error", "success"]).isRequired,
};
