export const isLoggedIn = () => {
  const token = localStorage.getItem("todotoken");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const logOut = () => {
  Storage.removeItem("todotoken");
};
