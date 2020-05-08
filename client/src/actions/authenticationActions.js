import axios from "axios";
import { getHeaders, getURI } from "../auth";

export const registerUser = async (newUser, setLoading, history) => {
  // TODO: Validate user input
  setLoading(true);
  try {
    const body = JSON.stringify(newUser);

    await axios.post(`${getURI()}/api/user/register`, body, getHeaders());

    setLoading(false);
    history.push("/login");
  } catch (errRes) {
    console.log(errRes);
    setLoading(false);
  }
};

export const loginUser = async (
  userCredentials,
  setLoading,
  history,
  handleLogIn
) => {
  setLoading(true);
  try {
    const body = JSON.stringify(userCredentials);

    const res = await axios.post(
      `${getURI()}/api/user/login`,
      body,
      getHeaders()
    );

    console.log(res.data);

    localStorage.setItem("todotoken", JSON.stringify(res.data));

    console.log(handleLogIn);

    setLoading(false);
    handleLogIn(true);
    history.push("/dashboard");
  } catch (errRes) {
    console.log(errRes);
    setLoading(false);
  }
};
