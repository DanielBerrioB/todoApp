import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./Main.styles";
import TopOptions from "../TopOptions/TopOptions";
import Task from "../Tasks/Task";

const Main = ({ classes }) => {
  return (
    <div className={classes.main} id="AppC">
      <TopOptions />
      <Task></Task>
    </div>
  );
};

export default withStyles(styles)(Main);
