import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/CreateOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import ClearIcon from '@material-ui/icons/Clear';

import TextField from '@material-ui/core/TextField';


import { makeStyles, Grid, Typography, Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  lineThrough: {
    textDecoration: "line-through",
  },
  newItem: {
    fontWeight: "bold",
  },
  delete: {
    alignSelf: "flex-end"
  },
}));

const TodoListItem = (props) => {
  const { status, title } = props.entry;
  const [updateTodoListEntryDialog, setUpdateTodoListEntryDialog] = useState(false);
  const [updateTodoListEntryField, setUpdateTodoListEntryField] = useState(false);
  
  const { 
    handleOnClickEntry, 
    handleOnClickUpdateEntry, 
    handleOnClickDeleteEntry, 
    handleUpdateEntryFieldChange, 
    handleUpdateTodoListEntryDialog, 
    handleCloseTodoListEntryDialog, 
    index 
  } = props;

  console.log(updateTodoListEntryDialog);

  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item xs={10}>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            {updateTodoListEntryDialog ? (
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
            <Typography
              variant="h6"
              className={status === true ? classes.lineThrough : classes.newItem}
              style={{fontSize: '90%'}}
            >
              {updateTodoListEntryDialog ? (
                <div>
                  <TextField
                    margin="none"
                    label={title}
                    size="small"
                    value={updateTodoListEntryField}
                    fullWidth
                    onChange={(event) => {
                      handleUpdateEntryFieldChange(event);
                    }}
                  />
                </div>
              ) : (
                <div>{title}</div>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} >
        <Grid container direction="row" justify="center" alignItems="center">
          {updateTodoListEntryDialog ? (
            <div>
              <IconButton
                onClick={(event) => {
                  handleOnClickUpdateEntry(index, event.target.value);
                }}
              >
                <CheckOutlinedIcon />
              </IconButton>
              
              <IconButton
              onClick={(event) => {
                event.preventDefault();
                setUpdateTodoListEntryDialog(false);
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
                setUpdateTodoListEntryDialog(true);
                // handleOnClickUpdateEntry(index);
              }}
            >
              <EditOutlinedIcon />
            </IconButton>

            <IconButton 
              aria-label="delete"
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
