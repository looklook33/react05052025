export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editeTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const set_user = (data) => ({
  type: SET_USER,
  payload: { user: data.user, token: data.token },
});

export const log_out = () => ({
  type: LOGOUT,
});

// Async action creators
const API = "http://localhost:3001";

const getAuthHeaders = (getState) => {
  const token = getState().token;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchTodos = () => async (dispatch, getState) => {
  const res = await fetch(`${API}/todos`, {
    headers: getAuthHeaders(getState),
  });
  const data = await res.json();
  dispatch(setTodos(data));
};

export const createTodo = (todo) => async (dispatch, getState) => {
  const res = await fetch(`${API}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(getState),
    },
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  dispatch(addTodo(data));
};

export const deleteTodo = (id) => async (dispatch, getState) => {
  await fetch(`${API}/todos/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(getState),
  });
  dispatch(removeTodo(id));
};

export const updateTodo = (id, todo) => async (dispatch, getState) => {
  const res = await fetch(`${API}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(getState),
    },
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  dispatch(editeTodo(data));
};

export const login = (username, password) => async (dispatch) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (data.user) {
    dispatch(set_user(data.user));
  }
};

export const signup = (username, password) => async (dispatch) => {
  const res = await fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (data.user && data.token) {
    dispatch(set_user(data));
  }
};

export const logout = () => async (dispatch, getState) => {
    await fetch(`${API}/auth/logout`, {
    method: "POST",
    headers: getAuthHeaders(getState),
  });
  dispatch(log_out);
};
