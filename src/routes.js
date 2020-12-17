import { useRef } from "react";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "./pages/home";
import TodosPage from "./pages/todos";
import "./index.css";
import Layout from "./layout";
import TodosDetailsPage from "./pages/todos-details-page";

const Routes = () => {
  const nodeRef = useRef();
  const location = useLocation();

  let background = location.state && location.state.background;

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="router-animation"
        nodeRef={nodeRef}
        unmountOnExit
      >
        <Layout innerRef={nodeRef}>
          <Switch location={background || location}>
            <Route path="/" exact component={HomePage} />
            <Route path="/todos" component={TodosPage} />
            <Route path="/todos/:id" component={TodosDetailsPage} />
          </Switch>
          {background && (
            <Route path="/todos/:id" children={<TodosDetailsPage />} />
          )}
        </Layout>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Routes);
