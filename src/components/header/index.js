import { NavLink } from "react-router-dom";
const { Tabs, Tab, Box } = require("@material-ui/core");

const logo = "../../assets/images/logo512.png";

const Header = () => {
  return (
    <Tabs>
      {/* <img src={logo} alt="logo"></img> */}
      <Tab to="/" label="Home" component={NavLink} value={""} />
      {/* <Tab to="/todos" label="Todos" component={NavLink} /> */}
    </Tabs>
  );
};

export default Header;
