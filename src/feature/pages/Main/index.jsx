import TodoFooter from "feature/TodoApp/components/TodoFooter";
import TodoHeader from "feature/TodoApp/components/TodoHeader";
import TodoList from "feature/TodoApp/components/TodoList";
import {
  addTodo,
  isCompletedTodo,
  removeTodo,
  toggleTodo,
} from "feature/TodoApp/todoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Main.scss";
import {
  setVisibilityFilter,
  VisibilityFilters,
} from "feature/TodoApp/filterSlice";

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.visibilityFilter);

  const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.isCompleted);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.isCompleted);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  };

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

  const handleTodoCompletedAllClick = (isCompledAll) => {
    console.log("CompletedAll-Todo");
    dispatch(toggleTodo(isCompledAll));
  };

  const handleCompletedCLick = (todo) => {
    console.log("Completed-Todo", todo);
    dispatch(isCompletedTodo(todo.id));
  };

  const handleFilterClick = (filter) => {
    console.log("Filter-Todo", filter);
    dispatch(setVisibilityFilter(filter));
  };
  return (
    <div className="todo-main">
      <TodoHeader
        onSubmit={handleTodoSubmit}
        onTodoCompletedAllClick={handleTodoCompletedAllClick}
      />
      <TodoList
        todoList={selectVisibleTodos(todos, filter)}
        onTodoEditClick={handleTodoEditClick}
        onTodoRemoveClick={handleTodoRemoveClick}
        onTodoCompletedClick={handleCompletedCLick}
      />
      <TodoFooter onTodoFilterClick={handleFilterClick} />
    </div>
  );
}

export default MainPage;
