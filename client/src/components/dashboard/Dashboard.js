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
  const [highlighted, setHighlighted] = useState(0);

  const todoListsData = [
    {
      todoListId: 1,
      title: "Chores",
      description: "",
      status: "Planned",
      creationDate: "",
      modificationDate: "",
      todoListEntries: [
        {
          entryId: 1,
          title: "Wash the dishes",
          status: false,
          description: "",
        },
        {
          entryId: 2,
          title: "Sweep the floor",
          status: false,
          description: "",
        },
      ],
    },
    {
      todoListId: 1,
      title: "Homework",
      description: "",
      status: "Planned",
      creationDate: "",
      modificationDate: "",
      todoListEntries: [
        {
          entryId: 1,
          title: "CMPE172",
          status: false,
          description: "",
        },
        {
          entryId: 2,
          title: "CMPE187",
          status: false,
          description: "",
        },
      ],
    },
  ];

  const handleOnClickTodoList = (index) => {
    setHighlighted(index);
  };

  const handleToggleEntryStatus = (entry) => {
    entry.status = !entry.status;
  };

  const classes = useStyles();

  const todoListsMap = todoListsData.map((todoList, index) => {
    return (
      <TodoList
        title={todoList.title}
        key={index}
        index={index}
        handleOnClickTodoList={handleOnClickTodoList}
      />
    );
  });

  const todoListEntryMap = (highlightedIndex) => {
    const todoList = todoListsData[highlightedIndex];

    if (todoListsData.length > 0) {
      return todoList.todoListEntries.map((entry, index) => {
        return (
          <TodoListItem
            entry={entry}
            handleToggleEntryStatus={handleToggleEntryStatus}
            key={index}
          />
        );
      });
    } else {
      return <div />;
    }
  };

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
                  {todoListsMap}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper
                variant="outlined"
                square
                className={classes.todoListEntries}
              >
                <Grid container direction="column" justify="flex-start">
                  {todoListEntryMap(highlighted)}
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
