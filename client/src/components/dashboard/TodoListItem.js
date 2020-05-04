import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import EditOutlinedIcon from "@material-ui/icons/CreateOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import ClearIcon from "@material-ui/icons/Clear";

import TextField from "@material-ui/core/TextField";

import { makeStyles, Grid, Typography, Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  lineThrough: {
    textDecoration: "line-through",
  },
  newItem: {
    fontWeight: "bold",
  },
  delete: {
    alignSelf: "flex-end",
  },
}));

const TodoListItem = (props) => {
  const [showTextField, setShowTextField] = useState(false);
  const [editTextField, setEditTextField] = useState("");

  const { status, title } = props.entry;

  const {
    handleOnClickEntry,
    handleOnClickUpdateEntry,
    handleOnClickDeleteEntry,
    handleUpdateEntryFieldChange,
    handleUpdateTodoListEntryDialog,
    handleCloseTodoListEntryDialog,
    index,
  } = props;

  const handleEditTextFieldChange = (event) => {
    setEditTextField(event.target.value);
  };

  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item xs={10}>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            {showTextField === true ? (
              <div />
            ) : (
              <Checkbox
                checked={status}
                onChange={(event) => {
                  event.preventDefault();
                  handleOnClickEntry(index, event.target.checked);
                }}
              />
            )}
          </Grid>
          <Grid item>
            {showTextField ? (
              <TextField
                margin="none"
                size="small"
                value={editTextField}
                fullWidth
                onChange={handleEditTextFieldChange}
              />
            ) : (
              <Typography
                variant="h6"
                className={
                  status === true ? classes.lineThrough : classes.newItem
                }
                style={{ fontSize: "90%" }}
              >
                {title}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid container direction="row" justify="center" alignItems="center">
          {showTextField ? (
            <div>
              <IconButton
                onClick={(event) => {
                  event.preventDefault();
                  handleOnClickUpdateEntry(index, editTextField);
                }}
              >
                <CheckOutlinedIcon />
              </IconButton>

              <IconButton
                onClick={(event) => {
                  event.preventDefault();
                  setShowTextField(false);
                }}
              >
                <ClearIcon />
              </IconButton>
            </div>
          ) : (
            <div>
              <IconButton
                onClick={(event) => {
                  event.preventDefault();
                  setEditTextField(title);
                  setShowTextField(true);
                }}
              >
                <EditOutlinedIcon />
              </IconButton>

              <IconButton
                onClick={(event) => {
                  event.preventDefault();
                  handleOnClickDeleteEntry(index, event.target);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoListItem;
