import React, { useState, useEffect } from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bottomBorderOnly: {
    borderBottom: "1px solid #bdc3c7",
  },
  p8: {
    padding: "8px",
  },
}));

const TodoList = (props) => {
  const [highlighted, setHighlighted] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(props.title);
    setHighlighted(props.highlighted);
  });

  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.bottomBorderOnly}>
      <Grid container direction="row" alignItems="center">
        <Typography variant="body1" className={classes.p8}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TodoList;
