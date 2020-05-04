import React from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import EditOutlinedIcon from "@material-ui/icons/CreateOutlined";

const useStyles = makeStyles((theme) => ({
  bottomBorderOnly: {
    borderBottom: "1px solid #bdc3c7",
  },
  p8: {
    padding: "8px",
  },
}));

const TodoList = (props) => {
  const classes = useStyles();

  const {
    title,
    handleOnClickList,
    handleOnClickUpdateList,
    handleOnClickDeleteList,
    handleUpdateTodoListDialog,
    index,
  } = props;

  return (
    <Grid
      container
      alignItems="center"
      className={classes.bottomBorderOnly}
      onClick={(event) => {
        event.preventDefault();
        handleOnClickList(index);
      }}
    >
      <Grid item xs={8}>
        <Grid container direction="row" alignItems="center">
          <Typography variant="body1" className={classes.p8}>
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container direction="row">
          <IconButton
            onClick={(event) => {
              event.preventDefault();
              handleUpdateTodoListDialog();
              handleOnClickUpdateList(index);
            }}
          >
            <EditOutlinedIcon />
          </IconButton>

          <IconButton
            aria-label="delete"
            onClick={(event) => {
              event.preventDefault();
              handleOnClickDeleteList(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoList;
