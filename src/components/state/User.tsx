import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

// this can also be done.
// interface AuthUser {
//   name: string;
//   email: string;
// }

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null); // the user can be null or AuthUser. <> defines the type of the userState var
  // const [user, setUser] = useState<AuthUser>({} as AuthUser); // type assertion if we do not want to pass null to the state variable.
  const handleLogin = () => {
    setUser({
      name: "Akshay",
      email: "akshay@google.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>user name is {user?.name}</div>
      <div>user email is {user?.email}</div>
    </div>
  );
};

export default User;
