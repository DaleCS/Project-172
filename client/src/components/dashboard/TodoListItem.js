import React, { useState, useEffect } from "react";

import { Grid, Typography, Checkbox } from "@material-ui/core";

const TodoListItem = (props) => {
  return (
    <Grid item xs={12}>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item>
          <Checkbox
            checked={props.entry.status}
            onChange={() => {
              props.handleToggleEntryStatus(props.entry);
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="body2">{props.entry.title}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoListItem;
