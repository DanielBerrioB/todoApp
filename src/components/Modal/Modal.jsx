import React from "react";
import styles from "./Modal.styles";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const ModalComponent = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(props.onCreateTask)();
    }
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={props.classes.paper}>
        <h2 id="simple-modal-title">
          {props.isEdit ? "Edit this task" : "Add a new task"}
        </h2>
        <TextField
          className={props.classes.inputStyle}
          id="title-new-task"
          label="Title"
          name="title"
          error={errors.title ? true : false}
          helperText={
            errors.title
              ? "Your text must be greater than 6 and less than 40 characters"
              : ""
          }
          color="secondary"
          inputRef={register({ minLength: 6, maxLength: 40, required: true })}
          InputLabelProps={{ shrink: true }}
          variant="filled"
          type="text"
          onKeyDown={handleKeyDown}
        />
        <TextField
          className={props.classes.inputStyle}
          id="filled-textarea"
          label="Description"
          name="description"
          inputRef={register({
            minLength: 6,
            maxLength: 200,
            required: true,
          })}
          placeholder="Description"
          color="secondary"
          error={errors.description ? true : false}
          helperText={
            errors.description
              ? "Your text must be greater than 6 and less than 40 characters"
              : ""
          }
          multiline
          variant="filled"
          type="text"
          onKeyDown={handleKeyDown}
        />
        <br />
        <Button onClick={handleSubmit(props.onCreateTask)} color="primary">
          {props.isEdit ? "Edit task" : "Create task"}
        </Button>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(ModalComponent);
