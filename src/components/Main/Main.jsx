import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./Main.styles";
import TopOptions from "../TopOptions/TopOptions";
import DashBoard from "../DashBoard/DashBoard";
import Task from "../Tasks/Task";

const Main = ({ classes }) => {
  return (
    <div className={classes.main} id="AppC">
      <TopOptions />
      <DashBoard />
      <div
        style={{
          backgroundColor: "#FBEAFF",
          border: "10px",
        }}
      >
        <Task></Task>
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);
