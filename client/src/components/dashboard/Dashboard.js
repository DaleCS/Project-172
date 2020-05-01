import React, { useState, useEffect } from "react";

import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";

import { makeStyles, Grid, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "60vh",
    marginTop: "48px",
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
  mt8: {
    marginTop: "8px",
  },
}));

const Dashboard = (props) => {
  const [highlightedTodoListIndex, setHighlightedTodoListIndex] = useState(-1);
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    const dummyData = [
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

    setTodoLists(dummyData);
  }, []);

  const handleOnClickList = (index) => {
    setHighlightedTodoListIndex(index);
  };

  const handleOnClickEntry = (index, value) => {
    const todoListsClone = [...todoLists];
    todoListsClone[highlightedTodoListIndex].todoListEntries[
      index
    ].status = value;

    setTodoLists(todoListsClone);
  };

  const classes = useStyles();

  const todoListsMap = todoLists.map((list, index) => {
    return (
      <TodoList
        title={list.title}
        handleOnClickList={handleOnClickList}
        key={index}
        index={index}
      />
    );
  });

  const todoListEntriesMap = () => {
    if (highlightedTodoListIndex > -1) {
      return todoLists[highlightedTodoListIndex].todoListEntries.map(
        (entry, index) => {
          return (
            <TodoListItem
              entry={entry}
              handleOnClickEntry={handleOnClickEntry}
              key={index}
              index={index}
            />
          );
        }
      );
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
                  <Grid item alignSelf="center" className={classes.mt8}>
                    <Button variant="contained" color="primary">
                      Create New Todo List
                    </Button>
                  </Grid>
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
                  {todoListEntriesMap()}
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
