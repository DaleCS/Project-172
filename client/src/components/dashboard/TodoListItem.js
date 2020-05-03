import React from "react";
import IconButton from '@material-ui/icons/DeleteOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

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
  const { handleOnClickEntry, handleOnClickDelete, index } = props;

  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item xs={11}>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Checkbox
              checked={status}
              onChange={(event) => {
                handleOnClickEntry(index, event.target.checked);
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              className={status === true ? classes.lineThrough : classes.newItem}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} >
        <Grid container direction="row" justify="center" alignItems="center">
          <IconButton 
            aria-label="delete"
            onClick={(event) => {
              handleOnClickDelete(index, event.target);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>  
    </Grid>
  );
};

export default TodoListItem;
