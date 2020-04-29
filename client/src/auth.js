export const isLoggedIn = () => {
  const user = localStorage.getItem("todotoken");
  if (user && user.token) {
    return true;
  } else {
    return false;
  }
};

export const logOut = () => {
  Storage.removeItem("todotoken");
};
