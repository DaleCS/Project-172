import axios from "axios";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export const registerUser = async (newUser, setLoading, history) => {
  // TODO: Validate user input
  setLoading(true);
  try {
    const body = JSON.stringify(newUser);

    await axios.post("/api/user/register", body, config);

    setLoading(false);
    history.push("/login");
  } catch (errRes) {
    console.log(errRes);
    setLoading(false);
  }
};

export const loginUser = async (userCredentials, setLoading, history) => {
  setLoading(true);
  try {
    const body = JSON.stringify(userCredentials);

    const res = await axios.post("/api/user/login", body, config);

    console.log(res.data);

    localStorage.setItem("todotoken", res.data);

    setLoading(false);
    history.push("/dashboard");
  } catch (errRes) {
    console.log("Error encountered during log in");
    setLoading(false);
  }
};

export const loginUser = async (userCredentials, setLoading, history) => {
  setLoading(true);
  try {
    const body = JSON.stringify(userCredentials);

    const res = await axios.post("/api/user/login", body, config);

    console.log(res.data);

    localStorage.setItem("todotoken", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user)) 

    setLoading(false);
    history.push("/dashboard");
  } catch (errRes) {
    console.log("Error encountered during log in");
    setLoading(false);
  }
};
