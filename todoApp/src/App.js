import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, toggleTheme } from "./redux/actions";
import TodoList from "./components/TodoList";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoDetails from "./components/TodoDetails";
import Auth from "./components/Auth";
import { Navigate } from "react-router-dom";


function PrivateRoute({ element }) {
  const user = useSelector((state) => state.user);
  return user ? element : <Navigate to="/auth" />;
}

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className={`app-container ${theme}`}>
      <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
      <Router>
        <Routes>
          <Route
            path="/todos"
            element={<PrivateRoute element={<TodoList />} />}
          />
          <Route
            path="/todos/:id"
            element={<PrivateRoute element={<TodoDetails />} />}
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
