import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { Tabs, Tab, makeStyles, Box } from "@material-ui/core";
import logo from "../../assets/image/logo512.png";

const useStyle = makeStyles({
  indicator: {
    top: "0px",
  },
});

// const logoUrl = "../../assets/image/logo512.png";

const Header = ({ navPages }) => (
  <Tabs
    className={styles.header}
    centered
    classes={{ indicator: useStyle.indicator }}
  >
    <Box
      className={styles.logoContainer}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img src={logo} className={styles.logo} alt="logo"></img>
    </Box>
    {navPages.map(({ url, title }) => {
      console.log(url, title);
      return <Tab key={url} label={title} component={NavLink} to={url} />;
    })}
  </Tabs>
);
export default Header;
