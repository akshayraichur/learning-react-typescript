import React, { useState } from "react";

type UserStateType = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<UserStateType>({} as UserStateType);
  const handleLogin = () => {};
  const handleLogout = () => {};
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
