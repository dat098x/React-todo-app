import {configureStore} from "@reduxjs/toolkit";
import todoReducer from 'feature/TodoApp/todoSlice';
import visibilityFilterReducer from 'feature/TodoApp/filterSlice'


const rootReducer = {
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
}
const store = configureStore({
  reducer: rootReducer,
})

export default store;