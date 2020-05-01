import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";
import axios from "axios";

import { addTodoList } from "../../actions/dashboard";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 20,
  },
});

const Dashboard = () => {
  const [todoLists, setTodoLists] = useState([
    { _id: "", todoListID: 0, title: "", status: "" },
  ]);
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo", complete: false },
  ]);
  const classes = useStyles();
  const listNameRef = useRef();
  const todoNameRef = useRef();

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddList(e) {
    const title = listNameRef.current.value;
    if (title === "") return;
    // const list = {
    //   title: title,
    //   user_id: user_id,
    //   status: "Planned"
    // }
    // addTodoList(list)
    setTodoLists((prevLists) => {
      return [
        ...prevLists,
        {
          id: uuidv4(),
          todoListID: 12312,
          title: title,
          description: "none",
          status: false,
        },
      ];
    });
    listNameRef.current.value = null;
  }
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(localStorage.getItem("todotoken"));
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      //I don't understand why I'm not allowed to make a get request, error 403 (forbidden).
      const response = await axios.get(
        `/api/todolists/allLists?user_id=21`,
        config
      );

      console.log(response.data[0]);

      // const data = await response.json();
      if (response.status >= 400) {
        throw new Error(response.data.errors);
      }
      //

      setTodoLists((prevLists) => {
        return [...prevLists, response.data[0]];
      });
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6} sm={3}>
          <input
            ref={listNameRef}
            id="outlined-basic"
            placeholder="Todo List"
            size="40"
          />
          <button variant="contained" color="primary" onClick={handleAddList}>
            Add
          </button>
          <br />
          <br />
          <Box>
            {todoLists.map((list) => {
              return <div>{list.title}</div>;
            })}
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <input
            ref={todoNameRef}
            id="outlined-basic"
            placeholder="Todo List Item"
            size="40"
          />
          <button variant="contained" color="primary" onClick={handleAddTodo}>
            Add
          </button>
          <br />
          <br />
          <Box>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
