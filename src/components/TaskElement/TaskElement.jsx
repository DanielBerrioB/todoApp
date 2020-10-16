import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import styles from "./TaskElement.styles";
import { getTime } from "../../helpers/utils";

const TaskElement = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const checkTask = (element) => {
    props.checkTask(element);
    handleClose();
  };

  const removeTask = (element) => {
    props.removeTask(element);
    handleClose();
  };

  const handleEdit = (element) => {
    props.handleOpenModal(element);
    handleClose();
  };

  let defaultColor = props.element.isCompleted ? "#008F7A" : "#2C73D2";
  defaultColor = props.element.isDeleted ? "red" : defaultColor;

  return (
    <GridListTile
      id={props.element.title}
      className={props.classes.itemStyle}
      key={props.element.title}
      style={{ backgroundColor: defaultColor }}
    >
      <div>
        <h3
          className={props.classes.titleTask}
          style={{
            textDecoration: props.element.isCompleted ? "line-through" : "",
          }}
        >
          {props.element.title}
        </h3>
        <p
          className={props.classes.titleTask}
          style={{
            textDecoration: props.element.isCompleted ? "line-through" : "",
          }}
        >
          {props.element.description}
        </p>
      </div>
      {props.element.isCompleted && (
        <GridListTileBar
          titlePosition="top"
          actionIcon={<DoneIcon fontSize="large" />}
          className={props.classes.topTitle}
        />
      )}
      <GridListTileBar
        title={getTime(props.element.date)}
        style={{
          textDecoration: props.element.isCompleted ? "line-through" : "",
        }}
        actionIcon={
          !props.element.isDeleted && (
            <div>
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                color="primary"
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </IconButton>
            </div>
          )
        }
      />
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!props.element.isCompleted && !props.element.isDeleted && (
          <div>
            <MenuItem onClick={() => checkTask(props.element)}>
              <DoneIcon />
              <p className={props.classes.textSpace}>Check task</p>
            </MenuItem>
            <MenuItem onClick={() => handleEdit(props.element)}>
              <EditIcon />
              <p className={props.classes.textSpace}>Edit</p>
            </MenuItem>
          </div>
        )}
        <MenuItem onClick={() => removeTask(props.element)}>
          <DeleteIcon />
          <p className={props.classes.textSpace}>Delete</p>
        </MenuItem>
      </Menu>
    </GridListTile>
  );
};

export default withStyles(styles)(TaskElement);
