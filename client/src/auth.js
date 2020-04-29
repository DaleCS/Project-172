export const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("todotoken"));
  if (user && user.token) {
    return true;
  } else {
    return false;
  }
};

export const logOut = () => {
  Storage.removeItem("todotoken");
};
