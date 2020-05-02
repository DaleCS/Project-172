import React, { useState, useEffect } from "react";

import {
  fetchTodoLists,
  fetchTodoListEntries,
  addTodoList,
  addTodoListEntry,
} from "../../actions/dashboard";

import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";

import {
  makeStyles,
  Grid,
  Paper,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  IconButton,
} from "@material-ui/core";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";

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
  addTodoListBtn: {
    color: "#2ecc71",
  },
  AddTodoListDialog: {
    minWidth: "420px",
  },
}));

const Dashboard = (props) => {
  const [todoLists, setTodoLists] = useState([]);
  const [todoListEntries, setTodoListEntries] = useState([]);
  const [isLoadingTodoLists, setLoadingTodoLists] = useState(false);
  const [isLoadingTodoListEntries, setLoadingTodoListEntries] = useState(false);

  const [openTodoListDialog, setTodoListDialog] = useState(false);
  const [newTodoListField, setNewTodoListField] = useState("");

  const [addTodoListEntryField, setTodoListEntryField] = useState("");

  const [currentTodoListId, setCurrentTodoListId] = useState(-1);

  useEffect(() => {
    const fetchUserTodoLists = async () => {
      setTodoLists(await fetchTodoLists(setLoadingTodoLists));
    };

    fetchUserTodoLists();
  }, []);

  const classes = useStyles(); // CSS Styling for UI elements

  /**
   * Handles clicks on the a todo list
   * @param {number} index
   */
  const handleOnClickList = async (index) => {
    if (todoLists[index].todoListId) {
      setCurrentTodoListId(todoLists[index].todoListId);
      setTodoListEntries(
        await fetchTodoListEntries(
          todoLists[index].todoListId,
          setLoadingTodoListEntries
        )
      );
    }
  };

  /**
   * Handles clicks on an entry
   * @param {number} index
   * @param {boolean} value
   */
  const handleOnClickEntry = (index, value) => {
    const todoListEntriesClone = [...todoListEntries];
    todoListEntriesClone[index].status = value;
    setTodoListEntries(todoListEntriesClone);
  };

  /**
   * Maps through todolists to render them
   */
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

  /**
   * Maps through entries to render them
   */
  const todoListEntriesMap = todoListEntries.map((entry, index) => {
    return (
      <TodoListItem
        entry={entry}
        index={index}
        handleOnClickEntry={handleOnClickEntry}
        key={index}
      />
    );
  });

  const handleNewTodoListFieldChange = (event) => {
    setNewTodoListField(event.target.value);
  };

  const handleCloseTodoListDialog = () => {
    setTodoListDialog(false);
  };

  const handleOpenTodoListDialog = (event) => {
    event.preventDefault();
    setTodoListDialog(true);
  };

  const handleCreateTodoList = (event) => {
    event.preventDefault();

    const newTodoList = {
      title: newTodoListField,
      description: "",
      status: "planned",
    };

    addTodoList(newTodoList, setLoadingTodoLists, setTodoLists);
    setTodoListDialog(false);
  };

  const handleAddTodoListEntry = (event) => {
    if (currentTodoListId > -1) {
      event.preventDefault();

      const newTodoListEntry = {
        title: addTodoListEntryField,
        todo_list_id: currentTodoListId,
        description: "",
        status: "planned",
      };

      addTodoListEntry(
        newTodoListEntry,
        setLoadingTodoListEntries,
        setTodoListEntries
      );
    }
  };

  const handleNewEntryFieldChange = (event) => {
    setTodoListEntryField(event.target.value);
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
                  {isLoadingTodoLists === false ? (
                    todoListsMap
                  ) : (
                    <Grid item>
                      <CircularProgress />
                    </Grid>
                  )}
                  {isLoadingTodoLists === false ? (
                    <Grid item className={classes.mt8}>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="center"
                        spacing={1}
                      >
                        <Grid item>
                          <IconButton
                            size="medium"
                            onClick={handleOpenTodoListDialog}
                          >
                            <AddCircleIcon
                              className={classes.addTodoListBtn}
                              fontSize="large"
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  ) : (
                    <div />
                  )}
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
                  {isLoadingTodoListEntries === false ? (
                    todoListEntriesMap
                  ) : (
                    <Grid item>
                      <CircularProgress />
                    </Grid>
                  )}
                  {currentTodoListId > -1 &&
                  isLoadingTodoListEntries === false ? (
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item xs={11}>
                          <TextField
                            margin="none"
                            label="Add A New Entry"
                            size="small"
                            fullWidth
                            onChange={handleNewEntryFieldChange}
                          />
                        </Grid>
                        <Grid item xs={1}>
                          <IconButton onClick={handleAddTodoListEntry}>
                            <AddIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  ) : (
                    <div />
                  )}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Dialog
        open={openTodoListDialog}
        onClose={handleCloseTodoListDialog}
        className={classes.AddTodoListDialog}
      >
        <DialogTitle>Add A New Todo List</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="email"
            fullWidth
            onChange={handleNewTodoListFieldChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTodoListDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateTodoList} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Dashboard;
