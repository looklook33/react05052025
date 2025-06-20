import { SET_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_THEME,UPDATE_TODO,SET_USER,LOGOUT } from "./actions";

const initialState = {
  todos: [],
  theme: "light",
  user:null,
  token:null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
     return {
        ...state,
        todos: state.todos.map((t) => (t.id === action.payload.id ? action.payload : t)),
      };
    case SET_USER:
      return {
        ...state, 
        user:action.payload.user,
        token:action.payload.token
      };
    case LOGOUT:
      return {
        ...state,
        user:null,
        token:null
      }
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};
