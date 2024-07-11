import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import displayReducer from "./displayReducer";

const rootReducer = combineReducers({
  todolist: todoReducer,
  display: displayReducer,
});

export default rootReducer;
