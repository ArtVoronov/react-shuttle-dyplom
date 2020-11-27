import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "./pages/home";
import TodosPage from "./pages/todos";
import "./index.css";
import { Fade } from "@material-ui/core";

const Routes = ({ location }) => {
  console.log(location);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="router-animation"
      >
        <Switch location={location}>
          <Route path="/" exact component={HomePage} />
          <Route path="/todos" component={TodosPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Routes);
