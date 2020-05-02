import React from "react";

import { makeStyles, Grid, Typography, Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  lineThrough: {
    textDecoration: "line-through",
  },
}));

const TodoListItem = (props) => {
  const { status, title } = props.entry;
  const { handleOnClickEntry, index } = props;

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container direction="row" justify="flex-start" alignItems="center">
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
            className={status === true ? classes.lineThrough : ""}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoListItem;
