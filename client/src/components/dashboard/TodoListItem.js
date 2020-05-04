import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/CreateOutlined';

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
  const { handleOnClickEntry, handleOnClickDeleteEntry, index } = props;

  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item xs={10}>
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
      <Grid item xs={2} >
        <Grid container direction="row" justify="center" alignItems="center">
          <IconButton>
            <EditOutlinedIcon />
          </IconButton>

          <IconButton 
            aria-label="delete"
            onClick={(event) => {
              handleOnClickDeleteEntry(index, event.target);
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
