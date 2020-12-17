import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { Tabs, Tab, Box } from "@material-ui/core";
import logo from "../../assets/image/logo512.png";
import useTabValue from "../../hooks/useTabsValue";

// const logoUrl = "../../assets/image/logo512.png";

const Header = ({ navPages }) => {
  const tabValue = useTabValue();

  return (
    <Tabs
      className={styles.header}
      centered
      value={tabValue}
      indicatorColor="primary"
    >
      {/* <Box
        className={styles.logoContainer}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={logo} className={styles.logo} alt="logo"></img>
      </Box> */}
      {navPages.map(({ url, title }) => {
        return (
          <Tab
            key={url}
            label={title}
            component={NavLink}
            to={url}
            value={url}
          />
        );
      })}
    </Tabs>
  );
};
export default Header;
