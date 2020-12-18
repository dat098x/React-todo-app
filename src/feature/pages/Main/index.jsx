import TodoFooter from "feature/TodoApp/components/TodoFooter";
import TodoHeader from "feature/TodoApp/components/TodoHeader";
import TodoList from "feature/TodoApp/components/TodoList";
import {
  addTodo,
  removeTodo,
  isCompletedTodo,
  filterTodo,
} from "feature/TodoApp/todoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Main.scss";

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleTodoSubmit = (todo) => {
    console.log("Submit-Todo", todo);
    const newTodo = {
      id: Math.trunc(Math.random() & 9000),
      isCompleted: false,
      ...todo,
    };
    dispatch(addTodo(newTodo));
  };

  const handleTodoEditClick = (todo) => {
    console.log("Edit-Todo", todo);
  };

  const handleTodoRemoveClick = (todo) => {
    console.log("Remove-Todo", todo);
    dispatch(removeTodo(todo.id));
  };

  const handleCompletedCLick = (todo) => {
    console.log("Completed-Todo", todo);
    dispatch(isCompletedTodo(todo.id));
  };

  const handleTodoFilterClick = (filter) => {
    console.log("Filter-Todo", filter);
    dispatch(filterTodo(filter));
  };

  return (
    <div className="todo-main">
      <TodoHeader onSubmit={handleTodoSubmit} />
      <TodoList
        todoList={todos}
        onTodoEditClick={handleTodoEditClick}
        onTodoRemoveClick={handleTodoRemoveClick}
        onTodoCompletedClick={handleCompletedCLick}
      />
      <TodoFooter onTodoFilterClick={handleTodoFilterClick} />
    </div>
  );
}

export default MainPage;
