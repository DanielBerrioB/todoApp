import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import styles from "./TopOptions.styles";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";
import Modal from "../Modal/Modal";
import { withStyles } from "@material-ui/core";

const TopOptions = ({ classes }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCreateTask = (data) => {
    if (data.title && data.description) {
      handleClose();
      dispatch(
        actions.addTask({
          title: data.title,
          description: data.description,
          date: new Date().getTime(),
          isDeleted: false,
          isCompleted: false,
        })
      );
    }
  };

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
      <Button onClick={handleOpen}>
        <AddCircleOutlineIcon fontSize="large" color="secondary" />
      </Button>
      <Modal
        open={open}
        isEdit={false}
        handleClose={handleClose}
        onCreateTask={onCreateTask}
      />
    </div>
  );
};

export default withStyles(styles)(TopOptions);
