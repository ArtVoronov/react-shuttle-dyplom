import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import navPages from "./data/pages.json";
import styles from "./App.module.css";
import Routes from "./routes";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header navPages={navPages} />
      <Container
        maxWidth="md"
        component={Routes}
        className={styles.container}
      />
    </BrowserRouter>
  );
}

export default App;
