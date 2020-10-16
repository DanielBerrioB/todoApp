import React from "react";
import styles from "./DashBoard.styles";
import { withStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const DashBoard = ({ classes }) => {
  const items = useSelector((state) => state.toDoList);
  var completed, deleted, uncompleted;
  if (items) {
    completed = items.filter((e) => e.isCompleted).length;
    deleted = items.filter((e) => e.isDeleted).length;
    uncompleted = items.filter((e) => !e.isCompleted).length - deleted;
  }

  return (
    <div className={classes.mainContainer}>
      <h4 className={classes.titles}>Total: {items.length}</h4>
      <h4 className={`${classes.titles} ${classes.completed}`}>
        Completed: {completed}
      </h4>
      <h4 className={`${classes.titles} ${classes.unCompleted}`}>
        Uncompleted: {uncompleted}
      </h4>
      <h4 className={`${classes.titles} ${classes.deleted}`}>
        Deleted: {deleted}
      </h4>
    </div>
  );
};

export default withStyles(styles)(DashBoard);
