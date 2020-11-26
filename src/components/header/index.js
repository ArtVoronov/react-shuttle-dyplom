import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { Tabs, Tab, Paper } from "@material-ui/core";

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/LAN_Airlines_logo.svg/1200px-LAN_Airlines_logo.svg.png";

const Header = ({ navPages }) => (
  <Tabs className={styles.header} centered>
    <Paper variant="outlined" className={styles.logoContainer}>
      <img src={logoUrl} className={styles.logo} alt="logo" />
    </Paper>
    {navPages.map(({ url, title }) => (
      <Tab label={title} component={NavLink} to={url} />
    ))}
  </Tabs>
  // <Grid
  //   container
  //   justify="center"
  //   alignItems="baseline"
  //   spacing={10}
  //   className={styles.header}
  // >
  //   <Grid item xs={12} spacing={3} className={styles.logoContainer}>
  //     <img src={logoUrl} alt="logo" className={styles.logo} />
  //   </Grid>
  //   {navPages.map(({ url, title }) => (
  //     <Grid
  //       key={url}
  //       item
  //       xs={12}
  //       spacing={3}
  //       component={NavLink}
  //       to={url}
  //       title={title}
  //     >
  //       {title}
  //     </Grid>
  //   ))}
  // </Grid>
);
export default Header;
