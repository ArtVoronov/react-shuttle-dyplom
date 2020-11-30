import styles from "./index.module.css";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const Layout = ({ children, size, direction = "column", innerRef }) => {
  return (
    <Container maxWidth={size} className={styles.container} ref={innerRef}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={direction}
        className={styles.box}
      >
        {children}
      </Box>
    </Container>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
