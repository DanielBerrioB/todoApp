import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./Main.styles";
import TopOptions from "../TopOptions/TopOptions";
import DashBoard from "../DashBoard/DashBoard";
import Task from "../Tasks/Task";

const Main = ({ classes }) => {
  return (
    <div className={classes.main}>
      <TopOptions />
      <DashBoard />
      <Task></Task>
    </div>
  );
};

export default withStyles(styles)(Main);
