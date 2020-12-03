import { Button } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import TodosPage from "./pages/todos";

const Routes = ({ location }) => {
  return (
    <Switch location={location}>
      <Route path="/" exact component={HomePage} />
      <Route path="/todos" component={TodosPage} />
    </Switch>
  );
};

export default Routes;
