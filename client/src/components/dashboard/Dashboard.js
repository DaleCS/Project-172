import React, { useState, useEffect } from "react";

import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";

import { makeStyles, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "60vh",
  },
  flexGrow1: {
    flexGrow: 1,
  },
  todoListEntries: {
    height: "100%",
    padding: "8px",
    paddingTop: "4px",
    paddingBottom: "4px",
  },
  border1: {
    border: "1px solid black",
  },
  border2: {
    border: "1px solid red",
  },
  bottomBorderOnly: {
    borderBottom: "1px solid #bdc3c7",
  },
  w100: {
    width: "100%",
  },
  h100: {
    height: "100%",
  },
  w80: {
    width: "80%",
  },
  p8: {
    padding: "8px",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      className={classes.root}
    >
      <Grid item xs={8}>
        <Paper variant="outlined" square elevation={3} className={classes.h100}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            className={classes.h100}
          >
            <Grid item xs={4}>
              <Paper variant="outlined" square className={classes.h100}>
                <Grid container direction="column" justify="flex-start">
                  <TodoList title="Chores" highlighted={false} />
                  <TodoList title="Homework" highlighted={false} />
                </Grid>
              </Paper>
            </Grid>
            <Grid item></Grid>
            <Grid item xs={8}>
              <Paper
                variant="outlined"
                square
                className={classes.todoListEntries}
              >
                <Grid container direction="column" justify="flex-start">
                  <TodoListItem title="Wash the dishes" finished={false} />
                  <TodoListItem title="Sweep the floor" fininshed={false} />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
