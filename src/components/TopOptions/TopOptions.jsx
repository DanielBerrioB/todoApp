import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import styles from "./TopOptions.styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import Modal from "../Modal/Modal";
import { withStyles } from "@material-ui/core";

const TopOptions = ({ classes }) => {
  const dispatch = useDispatch();
  const listTask = useSelector((state) => state.search.items);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setMessage] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setSearch("");
    dispatch(
      actions.searchElement({
        targetText: event.target.value,
      })
    );
  };

  const handleCloseError = () => {
    setOpenError(false);
    setMessage("");
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const onCreateTask = (data) => {
    if (data.title && data.description) {
      if (!listTask.find((e) => e.title === data.title.trim())) {
        handleClose();
        dispatch(
          actions.addTask({
            title: data.title.trim(),
            description: data.description,
            date: new Date().getTime(),
            isDeleted: false,
            isCompleted: false,
          })
        );
      } else {
        setMessage("The title is already created");
        setOpenError(true);
      }
    } else {
      setMessage("The value is not valid");
      setOpenError(true);
    }
  };

  const onSearch = (event) => {
    setSearch(event.target.value);
    setValue("");
    if (event.target.value.trim().length >= 3) {
      dispatch(
        actions.searchElement({ targetText: event.target.value.trim() })
      );
    } else {
      dispatch(actions.repopulate());
    }
  };

  const onResetAll = () => {
    setValue("");
    setSearch("");
    dispatch(actions.repopulate());
  };

  return (
    <div>
      <div className={classes.container}>
        <TextField
          className={classes.inputStyle}
          id="outlined-search"
          label="Search tasks"
          color="secondary"
          type="search"
          value={search}
          onChange={onSearch}
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
          onHandleAction={onCreateTask}
          openError={openError}
          closeError={handleCloseError}
          errorMessage={errorMessage}
        />
      </div>
      <div className={classes.resetButton}>
        <Button color="secondary" variant="contained" onClick={onResetAll}>
          Reset search
        </Button>
      </div>
      <div className={classes.container}>
        <RadioGroup
          row
          value={value}
          aria-label="position"
          name="position"
          onChange={handleChange}
          defaultValue="top"
        >
          <FormControlLabel
            value="completed"
            control={<Radio color="primary" size="small" />}
            label={<p className={classes.labelStyle}>Completed</p>}
            labelPlacement="top"
          />
          <FormControlLabel
            value="unCompleted"
            control={<Radio color="primary" size="small" />}
            label={<p className={classes.labelStyle}>Uncompleted</p>}
            labelPlacement="top"
          />
          <FormControlLabel
            value="deleted"
            control={<Radio color="primary" size="small" />}
            label={<p className={classes.labelStyle}>Deleted</p>}
            labelPlacement="top"
          />
        </RadioGroup>
      </div>
    </div>
  );
};

export default withStyles(styles)(TopOptions);
