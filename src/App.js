import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import navPages from "./data/pages.json";
import styles from "./App.module.css";
import Routes from "./routes";
import { Box, Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header navPages={navPages} />
      <Container maxWidth="lg">
        <Box
          className={styles.container}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Routes />
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
