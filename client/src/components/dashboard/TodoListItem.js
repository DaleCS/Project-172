import React, { useState, useEffect } from "react";

import { Grid, Typography, Checkbox } from "@material-ui/core";

const TodoListItem = (props) => {
  const [finished, setfinished] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setfinished(props.finished);
    setTitle(props.title);
  });

  const handleChange = () => {
    setfinished(!finished);
  };

  return (
    <Grid item xs={12}>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item>
          <Checkbox checked={finished} onChange={handleChange} />
        </Grid>
        <Grid item>
          <Typography variant="body2">{title}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoListItem;
