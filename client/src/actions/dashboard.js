import axios from "axios";

const token = localStorage.getItem("todotoken")
const config = {
    headers: {
      "content-type": "application/json",
      'Authorization': `Bearer ${token}`
    },
  };

  export const AllLists = async ()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const lists = await axios.get('/api/todolists/allLists', {
      params: {
      user_id :  user.userId
    }}, config)
    return lists
  }

  export const addTodoList = async () => {
    //const body = JSON.stringify(list);
    //await axios.post("/api/todolists/addList", body, config);
    // history.pushState("/dashboard")
  };
  
  export const addTodoListItem = async () => {

  };
  