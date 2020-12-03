import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>
);

export default App;
