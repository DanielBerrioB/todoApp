import React from "react";
import { withStyles } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MenuItem from "@material-ui/core/MenuItem";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import styles from "./Task.styles";
import TopOptions from "../TopOptions/TopOptions";
import { connect } from "react-redux";

const Tasks = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.gridList}>
      <GridList cols={2}>
        <GridListTile className={classes.itemStyle} key="1">
          <div>
            <h1 className={classes.titleTask}>Title 1</h1>
            <p>Description</p>
          </div>
          <GridListTileBar
            title="12/04/2020"
            actionIcon={
              <div>
                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  color="primary"
                  onClick={handleClick}
                >
                  <MoreHorizIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <DoneIcon />
                    <p>Check task</p>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <EditIcon />
                    <p>Edit</p>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <DeleteIcon />
                    <p>Delete</p>
                  </MenuItem>
                </Menu>
              </div>
            }
          />
        </GridListTile>
        <GridListTile className={classes.itemStyle} key="2" cols="1">
          <div>
            <h1 className={classes.titleTask}>Title 1</h1>
            <p>Description</p>
          </div>
          <GridListTileBar
            title="12/04/2020"
            actionIcon={
              <div>
                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  color="primary"
                  onClick={handleClick}
                >
                  <MoreHorizIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <DoneIcon />
                    <p>Check task</p>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <EditIcon />
                    <p>Edit</p>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <DeleteIcon />
                    <p>Delete</p>
                  </MenuItem>
                </Menu>
              </div>
            }
          />
        </GridListTile>
      </GridList>
    </div>
  );
};

export default withStyles(styles)(Tasks);
