import { combineReducers } from "redux";
import  todoReducer from './ToDoReducer'
const rootReducer = combineReducers({
  todoReducer: todoReducer,
});

export default rootReducer;
