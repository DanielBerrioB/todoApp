import React from "react";
import styles from "./Modal.styles";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

const ModalComponent = (props) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <form
        className={props.classes.paper}
        onSubmit={handleSubmit(props.onHandleAction)}
      >
        <h2 id="simple-modal-title">
          {props.isEdit ? "Edit this task" : "Add a new task"}
        </h2>
        <TextField
          className={props.classes.inputStyle}
          id="title-new-task"
          label="Title"
          name="title"
          defaultValue={props.isEdit ? props.taskEdit.title : null}
          error={errors.title ? true : false}
          helperText={
            errors.title
              ? "Your text must be greater than 6 and less than 40 characters"
              : ""
          }
          placeholder="Title"
          color="secondary"
          inputRef={register({ minLength: 6, maxLength: 40, required: true })}
          InputLabelProps={{ shrink: true }}
          variant="filled"
          type="text"
        />
        <TextField
          className={props.classes.inputStyle}
          id="filled-textarea"
          label="Description"
          name="description"
          defaultValue={props.isEdit ? props.taskEdit.description : null}
          inputRef={register({
            minLength: 6,
            maxLength: 40,
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
          InputLabelProps={{ shrink: true }}
          multiline
          variant="filled"
          type="text"
        />
        <br />
        <Button color="primary" type="submit" variant="contained">
          {props.isEdit ? "Edit task" : "Create task"}
        </Button>
        {props.openError && (
          <div className={props.classes.widthAlert}>
            <Alert severity="error" onClose={() => props.closeError()}>
              {props.errorMessage}
            </Alert>
          </div>
        )}
      </form>
    </Modal>
  );
};

export default withStyles(styles)(ModalComponent);
