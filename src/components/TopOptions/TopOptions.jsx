import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import styles from "./TopOptions.styles";
import { withStyles } from "@material-ui/core";

const TopOptions = ({ classes }) => {
  return (
    <div className={classes.container}>
      <TextField
        className={classes.inputStyle}
        id="outlined-search"
        label="Search tasks"
        color="secondary"
        type="search"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
      <Button>
        <AddCircleOutlineIcon fontSize="large" color="secondary" />
      </Button>
    </div>
  );
};

export default withStyles(styles)(TopOptions);
