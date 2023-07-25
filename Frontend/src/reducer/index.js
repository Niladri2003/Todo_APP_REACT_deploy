import { combineReducers } from "redux";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/user";
import todoReducer from "../slices/todoSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  todolist: todoReducer,
});

export default rootReducer;
