import axios from "axios";

const userData = JSON.parse(localStorage.getItem("todotoken"));
const config = {
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${userData.token}`,
  },
};

export const fetchTodoLists = async (setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(
      `/api/todolists/allLists?user_id=${userData.user.userId}`,
      config
    );

    // Transform the data into a format that the component can better render
    const transformedTodoLists = res.data.map((todoList) => {
      const {
        creationDate,
        description,
        modification_date,
        status,
        title,
        todo_list_id,
      } = todoList;

      return {
        todoListId: todo_list_id,
        title,
        description,
        status,
        creationDate,
        modificationDate: modification_date,
      };
    });

    setLoading(false);
    return transformedTodoLists;
  } catch (errRes) {
    console.log(errRes);
    setLoading(false);
    return [];
  }
};

export const fetchTodoListEntries = async (todoListId, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(
      `/api/todolists/allEntries?todoListID=${todoListId}`,
      config
    );

    // Transform the data into a format that the component can better render
    const transformedTodoListsEntries = res.data.map((entry) => {
      const { description, status, title, entry_id } = entry;
      let transformedStatus = false;

      switch (status.toLowerCase()) {
        case "planned": {
          transformedStatus = false;
          break;
        }
        case "completed": {
          transformedStatus = true;
          break;
        }
        default: {
        }
      }
      return {
        entryId: entry_id,
        title,
        status: transformedStatus,
        description,
      };
    });

    setLoading(false);
    return transformedTodoListsEntries;
  } catch (errRes) {
    console.log(errRes);
    setLoading(false);
    return [];
  }
};

export const addTodoList = async (body, setLoading, setTodoLists) => {
  setLoading(true);
  try {
    body.user_id = userData.user.userId;
    await axios.post(`/api/todolists/addList`, body, config);
    setTodoLists(await fetchTodoLists(setLoading));
    setLoading(false);
  } catch (errRes) {
    console.log(errRes);
    setLoading(false);
  }
};

export const deleteTodoList = async (todoListId, setLoading, setTodoLists, setTodoListEntries) => {
  setLoading(true);
  try {
    await axios.post(
      `/api/todolists/deleteList?todoListID=${todoListId}`,
      JSON.stringify({ ID: todoListId }),
      config
    );
    setTodoListEntries(await fetchTodoListEntries(todoListId, setLoading));
    setTodoLists(await fetchTodoLists(setLoading));
    setLoading(false);
  } catch (errRes) {
    console.log(errRes);
    setLoading(false);
  }
};

export const addTodoListEntry = async (body, setLoading, setTodoListEntries
) => {
  setLoading(true);
  try {
    await axios.post(`/api/todolists/addEntry`, body, config);
    setTodoListEntries(
      await fetchTodoListEntries(body.todo_list_id, setLoading)
    );
    setLoading(false);
  } catch (errRes) {
    console.log(errRes);
    setLoading(false);
  }
};

export const deleteTodoListEntry = async (body, entryId, setLoading, setTodoListEntries) => {
  setLoading(true);
  try {
    await axios.post(
      `/api/todolists/deleteListEntry?entryID=${entryId}`,
      JSON.stringify({ ID: entryId }),
      config
    );
    setTodoListEntries(await fetchTodoListEntries(body.todoListId, setLoading));
    setLoading(false);
  } catch (errRes) {
    console.log(errRes);
    setLoading(false);
  }
};
