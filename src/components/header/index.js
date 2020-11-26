import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { Tabs, Tab, makeStyles, Box } from "@material-ui/core";

const useStyle = makeStyles({
  indicator: {
    top: "0px",
  },
});

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/LAN_Airlines_logo.svg/1200px-LAN_Airlines_logo.svg.png";

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
      <img src={logoUrl} className={styles.logo} alt="logo"></img>
    </Box>
    {navPages.map(({ url, title }) => {
      console.log(url, title);
      return <Tab key={url} label={title} component={NavLink} to={url} />;
    })}
  </Tabs>
);
export default Header;
