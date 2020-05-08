export const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("todotoken"));
  if (user && user.token) {
    return true;
  } else {
    return false;
  }
};

export const logOut = () => {
  localStorage.removeItem("todotoken");
};

export const getCurrentUserData = () => {
  const user = JSON.parse(localStorage.getItem("todotoken"));
  return user;
};

export const getHeaders = (withToken = false) => {
  const user = getCurrentUserData();
  if (withToken) {
    return {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
  } else {
    return {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    };
  }
};

export const getURI = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:8080";
  } else {
    return "http://agenda-server-dev.us-west-2.elasticbeanstalk.com";
  }
};
