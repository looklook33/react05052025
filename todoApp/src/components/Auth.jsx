import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup, logout } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/todos");
    }
  }, [user, navigate]);

  const handleLogin = () => {
    dispatch(login(username, password));
  };

  const handleSignup = () => {
    dispatch(signup(username, password));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome, {user.username}!</h3>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h3>Login or Sign Up</h3>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Sign Up</button>
        </>
      )}
    </div>
  );
}