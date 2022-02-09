const logout = () => {
  localStorage.removeItem("token");
  //   window.location.reload(false);
  window.location.href = "/login";
};

export default logout;
