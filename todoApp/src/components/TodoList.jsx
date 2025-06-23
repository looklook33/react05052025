import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTodos, createTodo } from "../redux/actions";

export default function TodoList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (!task || !date) return alert("Task and date are required.");
    const newTodo = { task, date, description, completed: false };
    dispatch(createTodo(newTodo));
    setTask("");
    setDate("");
    setDescription("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => navigate(`/todos/${todo.id}`)}
            style={{ cursor: "pointer" }}
          >
            {todo.task} - {todo.completed ? "✔️" : "❌"}
          </li>
        ))}
      </ul>

      <h3>Add Todo</h3>
      <div className="input-container">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
