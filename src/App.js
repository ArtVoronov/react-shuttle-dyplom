import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import navPages from "./data/pages.json";
import Routes from "./routes";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Header navPages={navPages} />
      <Layout size="md">
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
