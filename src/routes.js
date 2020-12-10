import { useRef } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "./pages/home";
import TodosPage from "./pages/todos";
import "./index.css";
import Layout from "./layout";

const Routes = ({ location }) => {
  const nodeRef = useRef();

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
          <Switch location={location}>
            <Route path="/" exact component={HomePage} />
            <Route path="/todos" component={TodosPage} />
          </Switch>
        </Layout>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Routes);
