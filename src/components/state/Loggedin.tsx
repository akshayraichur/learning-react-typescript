import React, { useState } from "react";

const Loggedin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div>User is {isLoggedIn ? "logged in" : "loggedout"} </div>
    </div>
  );
};

export default Loggedin;
