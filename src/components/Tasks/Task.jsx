import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import Modal from "../Modal/Modal";
import styles from "./Task.styles";
import TaskElement from "../TaskElement/TaskElement";
import actions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Tasks = ({ classes }) => {
  const dispatch = useDispatch();
  const listTask = useSelector((state) => state.search.items);
  const [taskEdit, setTaskEdit] = useState({});
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setMessage] = useState("");

  const handleCloseModal = () => {
    setOpen(false);
    handleCloseError();
  };

  const handleCloseError = () => {
    setOpenError(false);
    setMessage("");
  };

  const handleOpenModal = (element) => {
    setTaskEdit(element);
    setOpen(true);
    handleCloseError();
  };

  const checkTask = (checkElement) => {
    dispatch(actions.checkTask(checkElement));
  };

  const removeTask = (deleteElement) => {
    let element = listTask.find((e) => e.title === deleteElement.title);
    element.isDeleted = true;
    dispatch(actions.deleteTask(element));
  };

  const onEditTask = (newElement) => {
    const arrayList = listTask.filter((e) => e.title !== taskEdit.title);
    const exists = !arrayList.find((e) => e.title === newElement.title.trim());
    if (exists) {
      newElement.date = new Date().getTime();
      newElement.isDeleted = false;
      newElement.isCompleted = false;
      dispatch(actions.editTask(newElement, taskEdit));
      setOpen(false);
    } else {
      setMessage("The title is already created");
      setOpenError(true);
    }
  };

  return (
    <GridList cols={2}>
      {listTask.length > 0 ? (
        listTask.map((element) => (
          <TaskElement
            key={element.title}
            element={element}
            checkTask={checkTask}
            handleOpenModal={handleOpenModal}
            removeTask={removeTask}
          />
        ))
      ) : (
        <h1 className={classes.noFound}>No items found :(</h1>
      )}

      <Modal
        open={open}
        isEdit={true}
        handleClose={handleCloseModal}
        onHandleAction={onEditTask}
        taskEdit={taskEdit}
        openError={openError}
        closeError={handleCloseError}
        errorMessage={errorMessage}
      />
    </GridList>
  );
};

export default withStyles(styles)(Tasks);
